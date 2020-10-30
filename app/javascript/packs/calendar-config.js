import {Calendar} from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import req from "superagent";
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';


function dateHandler(info) {
    // alert('Clicked on: ' + info.dateStr);
    // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    // alert('Current view: ' + info.view.type);
    // // change the day's background color just for fun
    //
    // info.dayEl.style.backgroundColor = 'red';
    let url = '/appointments/new?location_id=' + window.location_id;
    if (info) {
        url += '&date' + info.date.toISOString()
    }
    window.location.href = url;
}

function formatEventHtml(arg) {
    if (arg.event._def.ui.display === 'undefined'){
        let html = '<p class="m-0">' + arg.event._def.extendedProps.meta.formatted_time + ' ' +
            arg.event._def.extendedProps.meta.client_name + '</p>' +
            '<p class="m-0">' + arg.event._def.extendedProps.meta.help_text + '</p>';
        return {html: html};
    } else{
        let html = '<p class="m-0">' + arg.event._def.extendedProps.meta.title  +'</p>' ;
        return {html: html};
    }

}

function drawCalendar(element) {
    let view = window.view || 'resourceTimeGridDay'
    if (!element) {
        return
    }
    let calendar = new Calendar(element, {
        plugins: [timeGridPlugin, dayGridPlugin, resourceTimeGridPlugin, interactionPlugin],
        resources: 'staffs/calendar.json',
        initialView: view, //timeGridDay,  timeGridWeek, resourceTimeGridDay
        nowIndicator: true,
        allDaySlot: false,
        slotDuration: '00:15:00',
        headerToolbar: {
            center: 'prev today next title',
            left: '',
            right: 'timeGridWeek,resourceTimeGridDay'
        },
        eventMouseEnter: function (data) {
            if (data.event._def.ui.display === 'undefined') {
                let tooltip = '<div class="tooltiptopicevent card" >' +
                    'Staff: '  + data.event.extendedProps.meta.staff_name + '</br>' +
                    'Duration: '  + data.event.extendedProps.meta.duration + ' minutes.' + '</br>' +
                    'Price: ' + data.event.extendedProps.meta.price + ' KWD' + '</br>' +
                    'name: ' +  data.event.extendedProps.meta.name + '</br>' +
                    '</div>';
                $("body").append(tooltip);
                $('.tooltiptopicevent').fadeIn('500');
                $('.tooltiptopicevent').fadeTo('10', 1.9);
                $('.tooltiptopicevent').css('top', data.jsEvent.clientY + 20);
                $('.tooltiptopicevent').css('left', data.jsEvent.clientX + 20);
            }

        },
        eventMouseLeave: function (data, event, view) {
            $('.tooltiptopicevent').remove();
        },
        eventClick: function (info) {
            let id = info.event.extendedProps.meta.appointment_id;
            window.location.href = '/appointments/' + id;
        },
        dateClick: dateHandler,
        eventContent: formatEventHtml,
        events: function (info, successCallback, failureCallback) {
            req.get('calendar_events')
                .type('json')
                .query({
                    starts_at: info.start.toISOString(),
                    ends_at: info.end.toISOString(),
                    location_id: window.location_id === 'all' ? null : window.location_id,
                    staff_id: window.staff_id === 'all' ? null : window.staff_id
                })
                .end(function (err, res) {
                    if (err) {
                        failureCallback(err);
                    } else {
                        successCallback(
                            res.body.map(function (event) {
                                return {
                                    title: event.title,
                                    start: event.start,
                                    end: event.end,
                                    display: event.display,
                                    meta: event,
                                    color: event.color,
                                    resourceId: event.staff_id

                                }
                            })
                        )
                    }
                })

        }
    })
    calendar.render();
}

$(document).on('turbolinks:load', function () {
    registerEvents()
    window.location_id = $("#locationSelector").val()
    drawCalendar(document.getElementById('calendar'));
})

function staffChangeHandler(newId) {
    window.staff_id = newId;
    $("#staffSelector").val(newId);
    window.location_id = $("#locationSelector").val();
    if (window.staff_id === 'all') {
        window.view = 'resourceTimeGridDay'
    } else {
        window.view = 'timeGridWeek'
    }
    drawCalendar(document.getElementById('calendar'));
}

function registerEvents() {
    $("#staffSelector").change(function (e) {
        staffChangeHandler(e.target.value)
    });
    $("#locationSelector").change(function (e) {
        window.location_id = e.target.value;
        staffChangeHandler('all');
        $('select').formSelect();
    });
    $("#new_appointment").click(function () {
        dateHandler();
    });

}