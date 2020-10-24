import {Calendar} from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import req from "superagent";
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';



console.log("custom loaded");

function drawCalendar(element){
    if (!element){
        return
    }
    var calendar = new Calendar(element, {
        plugins: [timeGridPlugin, dayGridPlugin, resourceTimeGridPlugin],
        resources: [
            { id: 'a', title: 'Room A' },
            { id: 'b', title: 'Room B' },
            { id: 'c', title: 'Room C' },
            { id: 'd', title: 'Room D' }
        ],
        initialView: "resourceTimeGridDay", //timeGridDay,  timeGridWeek
        nowIndicator: true,
        groupByDateAndResource: true,
        headerToolbar: {
            center: 'prev,next today',
            left: '',
            right: 'timeGridWeek,resourceTimeGridDay'
        },
        eventClick: function(info){
            console.log(info);
        },
        events: function (info, successCallback, failureCallback) {
            req.get('calendar_events')
                .type('json')
                .query({
                    starts_at: info.start.toISOString(),
                    ends_at: info.end.toISOString(),
                    location_id: window.location_id,
                    staff_id: window.staff_id
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
                                    display: event.display ,
                                    color: event.display === 'background' ? '#aaa' : event.color,
                                    resourceId: 'a'

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

document.addEventListener('DOMContentLoaded', function () {
    drawCalendar(document.getElementById('calendar'));

});