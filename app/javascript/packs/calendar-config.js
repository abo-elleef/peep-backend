import {Calendar} from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import req from "superagent";
import dayGridPlugin from '@fullcalendar/daygrid';


console.log("custom loaded");



document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
        plugins: [timeGridPlugin, dayGridPlugin],
        initialView: "timeGridWeek", //timeGridDay,  timeGridWeek
        nowIndicator: true,
        headerToolbar: {
            center: 'prev,next today',
            left: '',
            right: 'timeGridWeek,timeGridDay'
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
                                    color: event.display === 'background' ? '#aaa' : event.color

                                }
                            })
                        )
                    }
                })

        }
    })
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
    calendar.render();
});