(function() {
  const [form] = document.forms;

  function handleUpload(event) {
    const fileInput = event.target.img;
    const [file] = fileInput.files;

    if (!file) {
      alert('You must select a file to upload');
      return event.preventDefault();
    }

    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ];

    const invalidMimeType = !(allowedMimes.includes(file.type));
    if (invalidMimeType) {
      alert('Invalid file type');
      return event.preventDefault();
    }
  }

  form.addEventListener('submit', handleUpload);
})();
