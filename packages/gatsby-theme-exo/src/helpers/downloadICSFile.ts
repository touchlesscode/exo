const ics = require('ics');

export default function downloadICSFile(
    date: Date, title: string, description: string
) {
    ics.createEvent({
        start: [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()],
        duration: { minutes: 30, hours: 0 },
        title,
        description,
    }, (error: any, value: any) => {
        if (error) {
            alert('There was an error creating your calendar event. If this persists please notify support.');
            return
        }

        var file = new File([value], 'event.ics', { type: "text/plain" });

        const url = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.style.display = 'none';
        link.download = 'event.ics';
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        link.remove();
    });
}