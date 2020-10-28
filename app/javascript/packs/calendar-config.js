import {Calendar} from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import req from "superagent";
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';


console.log("custom loaded");

function dateHandler(info) {
    // alert('Clicked on: ' + info.dateStr);
    // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    // alert('Current view: ' + info.view.type);
    // // change the day's background color just for fun
    //
    // info.dayEl.style.backgroundColor = 'red';
    let url = '/appointments/new?location_id=' + window.location_id;
    if(info){ url += '&date' + info.date.toISOString() }
    window.location.href = url;
}

function drawCalendar(element) {
    let view  =  window.view || 'resourceTimeGridDay'
    if (!element) {
        return
    }
    let calendar = new Calendar(element, {
        plugins: [timeGridPlugin, dayGridPlugin, resourceTimeGridPlugin, interactionPlugin],
        resources: 'staffs/calendar.json',
        initialView: view, //timeGridDay,  timeGridWeek, resourceTimeGridDay
        nowIndicator: true,
        allDaySlot: false,
        slotMinWidth: 300,
        headerToolbar: {
            center: 'prev,next today',
            left: '',
            right: 'timeGridWeek,resourceTimeGridDay'
        },
        eventMouseEnter: function (data) {
            if (data.event._def.ui.display === 'undefined'){
                console.log(data);
                let tooltip = '<div class="tooltiptopicevent" >' +
                    'staff_name: ' + ': ' + data.event.extendedProps.meta.staff_name + '</br>' +
                    'duration: ' + ': ' + data.event.extendedProps.meta.duration + ' minutes.' + '</br>' +
                    'price: ' + ': ' + data.event.extendedProps.meta.price + ' KWD' + '</br>' +
                    '</div>';
                $("body").append(tooltip);
                $('.tooltiptopicevent').fadeIn('500');
                $('.tooltiptopicevent').fadeTo('10', 1.9);
                $('.tooltiptopicevent').css('top', data.jsEvent.clientY);
                $('.tooltiptopicevent').css('left', data.jsEvent.clientX );
            }

        },
        eventMouseLeave: function (data, event, view) {
            $('.tooltiptopicevent').remove();
        },
        eventClick: function (info) {
            console.log(info);
            let id = info.event.extendedProps.meta.appointment_id;
            window.location.href = '/appointments/' + id;
        },
        dateClick: dateHandler,
        events: function (info, successCallback, failureCallback) {
            req.get('calendar_events')
                .type('json')
                .query({
                    starts_at: info.start.toISOString(),
                    ends_at: info.end.toISOString(),
                    location_id: window.location_id === 'all' ? null : window.location_id,
                    staff_id: window.staff_id === 'all' ? null: window.staff_id
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
    // [
    //     {
    //         title: 'All Day Event',
    //         start: '2020-10-01'
    //     },
    //     {
    //         title: 'Long Event',
    //         start: '2020-10-07',
    //         end: '2020-10-10'
    //     },
    //     {
    //         groupId: '999',
    //         title: 'Repeating Event',
    //         start: '2020-10-09T16:00:00'
    //     },
    //     {
    //         groupId: '999',
    //         title: 'Repeating Event',
    //         start: '2020-10-16T16:00:00'
    //     },
    //     {
    //         title: 'Conference',
    //         start: '2020-10-11',
    //         end: '2020-10-13'
    //     },
    //     {
    //         title: 'Meeting',
    //         start: '2020-10-12T10:30:00',
    //         end: '2020-10-12T18:30:00'
    //     },
    //     {
    //         title: 'Lunch',
    //         start: '2020-10-12T12:00:00'
    //     },
    //     {
    //         title: 'Meeting',
    //         start: '2020-10-12T14:30:00'
    //     },
    //     {
    //         title: 'Birthday Party',
    //         start: '2020-10-13T07:00:00'
    //     },
    //     {
    //         title: 'Click for Google',
    //         url: 'http://google.com/',
    //         start: '2020-10-28'
    //     }
    // ]
}

$(document).on('turbolinks:load', function () {
    registerEvents()
    window.location_id = $("#locationSelector").val()
    drawCalendar(document.getElementById('calendar'));
})

function staffChangeHandler(newId){
    console.log('staff customer handler ');
    window.staff_id = newId;
    $("#staffSelector").val(newId);
    window.location_id = $("#locationSelector").val();
    if(window.staff_id === 'all'){
        window.view = 'resourceTimeGridDay'
    }else{
        window.view = 'timeGridWeek'
    }
    drawCalendar(document.getElementById('calendar'));
}

function registerEvents() {
    $("#staffSelector").change(function (e) {
        console.log('staff changed');
        staffChangeHandler(e.target.value)
    });
    $("#locationSelector").change(function (e) {
        console.log('location changed');
        window.location_id = e.target.value;
        staffChangeHandler('all');
        $('select').formSelect();
    });
    $("#new_appointment").click(function(){
        dateHandler();
    });

}