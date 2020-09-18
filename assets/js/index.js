(function () {
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
      'image/gif',
    ];

    const invalidMimeType = !(allowedMimes.includes(file.type));
    if (invalidMimeType) {
      const allowedMimeTypesClone = [...allowedMimeTypes];
      const lastMimeType = allowedMimeTypesClone.pop();
      let allowedMimeTypesText = allowedMimeTypesClone.join(', ').trim();
      allowedMimeTypesText += ` and ${lastMimeType}`;

      alert(
        `Invalid file type.  The file types allowed are as follows: ${allowedMimeTypesText}`,
      );
      return event.preventDefault();
    }

    const oneKilobyte = 1024;
    const oneMegabyte = oneKilobyte ** 2;
    const twoMegabytes = oneMegabyte * 2;
    const maximumLimit = Number(twoMegabytes);

    const fileSizeExceededTheMaximumLimit = file.size > maximumLimit
    if (fileSizeExceededTheMaximumLimit) {
      alert('File too large. The file size must be less than 2MB');
      return event.preventDefault();
    }
  }

  form.addEventListener('submit', handleUpload);
}());
