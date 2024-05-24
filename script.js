function tampilkanData() {
    // Ambil nilai dari input form
    var name = document.getElementById('Name').value;
    var age = document.getElementById('Age').value;
    var gender = document.getElementById('Gender').value;
    var address = document.getElementById('Address').value;

    // Tampilkan menggunakan SweetAlert dengan tombol Confirm dan Cancel
    Swal.fire({
        title: 'Your Details',
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Address:</strong> ${address}</p>
        `,
        imageUrl: './assets/a.png', // Ganti dengan URL atau path ke logo Manchester United
        imageWidth: 150,
        imageHeight: 200,
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        customClass: {
            popup: 'black-background', // Menambahkan kelas khusus untuk latar belakang hitam
            confirmButton: 'confirm-button-class',
            cancelButton: 'cancel-button-class'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '⇛CoNfIrMeD!!!⇚',
                '#GGMU.',
                'success'
            );
        } else if (result.isDismissed) {
            Swal.fire(
                '⇛CaNcElLeD!!!⇚',
                'oooPPPsss...',
                'error'
            );
        }
    });
}
