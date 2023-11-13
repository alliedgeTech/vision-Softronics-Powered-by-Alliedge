document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        mobileno: form.elements.mobileno.value,
        selectservices: form.elements.selectservices.value,
        projectdisc: form.elements.projectdisc.value,
      };
      console.log("Form Data",formData);
      if(formData){
        Toastify({
            text: "Form submitted successfully!",
            duration: 3000,
            gravity: "top", // Display at the top
            position: "center", // Display in the center
          }).showToast();
      }else{
        Toastify({
            text: "Error submitting form. Please try again.",
            duration: 3000,
            gravity: "top", // Display at the top
            position: "center", // Display in the center
            backgroundColor: "red",
          }).showToast();
      }
      
      fetch('https://testing-agile.onrender.com/admin/vision/addform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        // body: JSON.stringify(Object.fromEntries(formData)),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
       
        })
        .catch(error => {
          console.error('Error:', error);
          console.log('Server response:', error.response);

        });
    });
  });
