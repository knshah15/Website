
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);

  var excelModalHeader = "Practical Microsoft Excel Training (Mac or PC)";
  var powerpointModalHeader = "Practical Microsoft PowerPoint Training (Mac or PC)";
  var wordModalHeader = "Practical Microsoft Word Training (Mac or PC)";
  var partnershipModalHeader = "Corporate Training Services";
  var computerskillsModalHeader = "Computer Essentials, Website Creation and Online Marketing";
  var careerModalHeader = "Does Your Resume Standout?";

  var excelModalCopy = "excelModalCopy";
  var powerpointModalCopy = "powerpointModalCopy";;
  var wordModalCopy = "wordModalCopy";;
  var partnershipModalCopy = "partnershipModalCopy";;
  var computerskillsModalCopy = "computerskillsModalCopy";;
  var careerModalCopy = "careerModalCopy";;

  switch (recipient) {
      case 'excel':
         modal.find('.modal-title').text(excelModalHeader);
         modal.find('.modal-body-content').text(excelModalCopy);
      break;
      case 'powerpoint':
        modal.find('.modal-title').text(powerpointModalHeader);
        modal.find('.modal-body-content').text(powerpointModalCopy);
      break;
      case 'word':
        modal.find('.modal-title').text(wordModalHeader);
        modal.find('.modal-body-content').text(wordModalCopy);
      break;
      case 'partnership':
        modal.find('.modal-title').text(partnershipModalHeader);
        modal.find('.modal-body-content').text(partnershipModalCopy);
      break;
      case 'computerskills':
        modal.find('.modal-title').text(computerskillsModalHeader);
        modal.find('.modal-body-content').text(computerskillsModalCopy);
      break;
      case 'career':
        modal.find('.modal-title').text(careerModalHeader);
        modal.find('.modal-body-content').text(careerModalCopy);
      break;
  }
})
