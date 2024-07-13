
const apiToken = '14c594e17171592d7f8dfffafb87285f4fc0c077';
const companyDomain = 'ars-sandbox';



document.getElementById('createJobButton').addEventListener('click', function() {
    createJob();
});

function createJob() {
    const form = document.getElementById('job-form');
    const formData = new FormData(form);

    const jobData = {
        clientFirstName: formData.get('clientFirstName'),
        clientLastName: formData.get('clientLastName'),
        clientPhone: formData.get('clientPhone'),
        clientEmail: formData.get('clientEmail'),
        jobType: formData.get('jobType'),
        jobSource: formData.get('jobSource'),
        jobNote: formData.get('jobNote'),
        serviceLocation: formData.get('serviceLocation'),
        city: formData.get('city'),
        state: formData.get('state'),
        zip: formData.get('zip'),
        area: formData.get('area'),
        scheduleDate: formData.get('scheduleDate'),
        startTime: formData.get('startTime'),
        endTime: formData.get('endTime'),
        technician: formData.get('technician')
    };

    fetch(`https://${companyDomain}.pipedrive.com/v1/deals?api_token=${apiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Сделка успешно создана!');
            } else {
                alert('Ошибка при создании сделки');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}

function saveInfo() {
    alert('Информация сохранена!');
}
