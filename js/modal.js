
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);

  var excelModalTitle = "Practical Microsoft Excel Training (Mac or PC)";
  var powerpointModalTitle = "Practical Microsoft PowerPoint Training (Mac or PC)";
  var wordModalTitle = "Practical Microsoft Word Training (Mac or PC)";
  var partnershipModalTitle = "Corporate Training Services";
  var computerskillsModalTitle = "Computer Essentials, Website Creation and Online Marketing";
  var careerModalTitle = "Does Your Resume Standout?";

  var modalBodyContent = document.getElementById('modalBodyContent');

  switch (recipient) {
      case 'excel':
         modal.find('.modal-title').text(excelModalTitle);
         modalBodyContent.innerHTML = '';
         var divContent = document.createElement('div');
         divContent.className = 'row';
         divContent.innerHTML = `
            <div class="col-sm-12">
                <p class="modal-body-content">Practical Microsoft Excel training focused on real-world business projects and assignments. Here are a sample of topic areas I can help you master.</p>
            </div>
            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title">Beginner Topics</h3></div>
                    <ul class="list-group">
                        <li class="list-group-item">Spreadsheet Fundamentals</li>
                        <li class="list-group-item">Navigating Excel</li>
                        <li class="list-group-item">Entering Data</li>
                        <li class="list-group-item">Basic Formatting</li>
                        <li class="list-group-item">Basic Formulas</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title">Presenting Information</h3></div>
                    <ul class="list-group">
                        <li class="list-group-item">Building Charts</li>
                        <li class="list-group-item">Building Graphs</li>
                        <li class="list-group-item">Formatting Spreadsheets</li>
                        <li class="list-group-item">Cell Formatting</li>
                        <li class="list-group-item">Conditional Formatting</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title">Working with Formulas</h3></div>
                    <ul class="list-group">
                        <li class="list-group-item">Commonly-Used Excel Formulas</li>
                        <li class="list-group-item">"IF" Statements</li>
                        <li class="list-group-item">VLOOKUP and HLOOKUP</li>
                        <li class="list-group-item">Complex Formulas</li>
                        <li class="list-group-item">Absolute and Relative References</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title">Data Analysis</h3></div>
                    <ul class="list-group">
                        <li class="list-group-item">Sorting and Filtering Data</li>
                        <li class="list-group-item">Working with Large Data Sets</li>
                        <li class="list-group-item">Pivot Tables</li>
                        <li class="list-group-item">Excel Data Analysis Toolpak</li>
                        <li class="list-group-item">Regression and Statistical Analysis</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title">Budgeting, Finance and Accounting</h3></div>
                    <ul class="list-group">
                        <li class="list-group-item">Building Financial Statements</li>
                        <li class="list-group-item">Financial Modeling</li>
                        <li class="list-group-item">Building Projections</li>
                        <li class="list-group-item">Formatting and Reporting</li>
                        <li class="list-group-item">Financial Analysis</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title">Advanced Topics</h3></div>
                    <ul class="list-group">
                        <li class="list-group-item">Excel Macros</li>
                        <li class="list-group-item">Visual Basic</li>
                        <li class="list-group-item">Iteration and Circular References</li>
                        <li class="list-group-item">Advanced Lookups (Index, Match, Offset)</li>
                        <li class="list-group-item">Advanced Formulas</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-12">
                <button type="button" onclick="openForm()" class="btn btn-primary">CONTACT TO SCHEDULE TRAINING</button>
            </div>
         `
         document.getElementById('modalBodyContent').appendChild(divContent);
      break;
      case 'powerpoint':
        modal.find('.modal-title').text(powerpointModalTitle);
        modalBodyContent.innerHTML = '';
        var divContent = document.createElement('div');
        divContent.className = 'row';
        divContent.innerHTML = `
            <div class="col-sm-12">
                <p class="modal-body-content">Practical Microsoft PowerPoint training that covers the basics and goes beyond so you can create powerful, effective presentations for a wide range of business purposes. Here are a sample of topic areas I can help you master.</p>
            </div>
           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Beginner Topics</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Creating basic presentations</li>
                       <li class="list-group-item">Working with templates</li>
                       <li class="list-group-item">Using textboxes, shapes and graphics</li>
                       <li class="list-group-item">Adding animations</li>
                       <li class="list-group-item">Proper use of text and styles</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Sales and Business Presentations</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Choosing the right format for your audience</li>
                       <li class="list-group-item">Structuring your presentation</li>
                       <li class="list-group-item">Writing powerful headings and content</li>
                       <li class="list-group-item">Incorporating charts and data</li>
                       <li class="list-group-item">Aligning and formatting for a clean, professional look</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Brochures and Marketing Materials</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Creating custom business themes for your brand</li>
                       <li class="list-group-item">Writing content that speaks to your audience</li>
                       <li class="list-group-item">Highlighting your value proposition</li>
                       <li class="list-group-item">Using shapes and objects in creative ways</li>
                       <li class="list-group-item">Best-practices for fonts, colors and content</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <button type="button" onclick="openForm()" class="btn btn-primary">CONTACT TO SCHEDULE TRAINING</button>
           </div>
        `
        document.getElementById('modalBodyContent').appendChild(divContent);
      break;
      case 'word':
        modal.find('.modal-title').text(wordModalTitle);
        modalBodyContent.innerHTML = '';
        var divContent = document.createElement('div');
        divContent.className = 'row';
        divContent.innerHTML = `
            <div class="col-sm-12">
                <p class="modal-body-content">Practical Microsoft Word training that covers the basics and goes beyond to teach you the guidelines and best-practices to create professional business documents. Here are a sample of topic areas I can help you master.</p>
            </div>
           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Beginner Topics</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Overview of functionality to get you going</li>
                       <li class="list-group-item">Working with fonts, colors and text styles</li>
                       <li class="list-group-item">Inserting shapes and graphics</li>
                       <li class="list-group-item">Final touches: page numbers, contents and more</li>
                       <li class="list-group-item">Formatting best-practices and common pitfalls</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Business Cases and Proposals</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Structuring your document</li>
                       <li class="list-group-item">Know the important sections to include</li>
                       <li class="list-group-item">Incorporating financial forecasts and data</li>
                       <li class="list-group-item">Working with charts and graphs in Word</li>
                       <li class="list-group-item">Using a table of contents and applying polish</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Brochures and Marketing Materials</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Creating impactful brochures and datasheets</li>
                       <li class="list-group-item">Writing content that speaks to your audience</li>
                       <li class="list-group-item">Highlighting your value proposition</li>
                       <li class="list-group-item">Formatting for brochures, flyers and mailers</li>
                       <li class="list-group-item">Best-practices for fonts, colors and content</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <button type="button" onclick="openForm()" class="btn btn-primary">CONTACT TO SCHEDULE TRAINING</button>
           </div>
        `
        document.getElementById('modalBodyContent').appendChild(divContent);
      break;
      case 'career':
        modal.find('.modal-title').text(careerModalTitle);
        modalBodyContent.innerHTML = '';
        var divContent = document.createElement('div');
        divContent.className = 'row';
        divContent.innerHTML = `
            <div class="col-sm-12">
                <p class="modal-body-content">Recruiters and hiring managers receive hundreds of resumes for positions. Make sure that yours stands out and gets selected. Once you start applying, be prepared to maximize your chance of getting the job. Here is how Skill Seeker can help you with both resumes and interview preparation.</p>
            </div>
           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Resume Preparation</h3></div>
                   <ul>
                        <li>Working with Skill Seeker to create a strong, professional resume that positions you in the best way is easy. First, we will meet in person or speak over the phone to go over your background, current resume (if you have one), and the jobs you are interested in.</li>
                        <li>After we speak, I will incorporate everything I learned about your background and goals and create a resume template that you can use for years to come. If you have any feedback or edits on the final product, I will be happy to incorporate them so that you are satisfied.</li>
                   </ul>

                   <div class="panel-heading"><h3 class="panel-title">Interview Preparation</h3></div>
                   <div class="panel-body"><p>Preparation and practice are the keys to successfully nailing a job interview. I will work with you, one-on-one, to coach you for your upcoming interviewing. Here is my approach for preparing my clients for interviews:</p></div>
                   <ul>
                        <li>Review best-practices and strategies for interviewing</li>
                        <li>Review of the companies and roles you are interested in</li>
                        <li>Mock interviews, customized to the role and company you are interest in</li>
                        <li>Practice with dozens of interview questions until you feel fully prepared</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <button type="button" onclick="openForm()" class="btn btn-primary">CONTACT TO SCHEDULE TRAINING</button>
           </div>
        `
        document.getElementById('modalBodyContent').appendChild(divContent);
      break;
      case 'computerskills':
        modal.find('.modal-title').text(computerskillsModalTitle);
        modalBodyContent.innerHTML = '';
        var divContent = document.createElement('div');
        divContent.className = 'row';
        divContent.innerHTML = `
            <div class="col-sm-12">
                <p class="modal-body-content">Computer and web training to get you comfortable with computing. Once we cover the basics, we can dive more deeply into technologies you are interested in, like creating your own website and marketing it online.</p>
            </div>
           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Basic Use of Mac or PC</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Setup and configuration</li>
                       <li class="list-group-item">Overview of main components</li>
                       <li class="list-group-item">Running programs</li>
                       <li class="list-group-item">Using browsers and downloading programs</li>
                       <li class="list-group-item">Essential troubleshooting</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Setting up Websites</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Free tools to create your website</li>
                       <li class="list-group-item">Choosing a domain</li>
                       <li class="list-group-item">Hosting your site</li>
                       <li class="list-group-item">Customizing your site</li>
                       <li class="list-group-item">Working with HTML and CSS</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Marketing Your Business Online</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Digital marketing basics</li>
                       <li class="list-group-item">Showing up in maps and search results</li>
                       <li class="list-group-item">Running online advertisements</li>
                       <li class="list-group-item">Measuring the performance of your site</li>
                       <li class="list-group-item">Best practices for content</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <button type="button" onclick="openForm()" class="btn btn-primary">CONTACT TO SCHEDULE TRAINING</button>
           </div>
        `
        document.getElementById('modalBodyContent').appendChild(divContent);
      break;
      case 'partnership':
        modal.find('.modal-title').text(partnershipModalTitle);
        modalBodyContent.innerHTML = '';
        var divContent = document.createElement('div');
        divContent.className = 'row';
        divContent.innerHTML = `
            <div class="col-sm-12">
                <p class="modal-body-content">I partner with local businesses to provide cost-effective group training. I will work with you to create a customized training program and deliver the training at your offices. Please see below for a sample of training areas.</p>
            </div>
           <div class="col-sm-12">
               <div class="panel panel-default">
                   <div class="panel-heading"><h3 class="panel-title">Training for Businesses</h3></div>
                   <ul class="list-group">
                       <li class="list-group-item">Data Analysis in Microsoft Excel</li>
                       <li class="list-group-item">Presentation and Formatting in Microsoft Excel</li>
                       <li class="list-group-item">Formulas, Macros and Advanced Tools in Microsoft Excel</li>
                       <li class="list-group-item">Financial Forecasting and Planning in Microsoft Excel</li>
                   </ul>
               </div>
           </div>

           <div class="col-sm-12">
               <button type="button" onclick="openForm()" class="btn btn-primary">CONTACT TO SCHEDULE TRAINING</button>
           </div>
        `
        document.getElementById('modalBodyContent').appendChild(divContent);
      break;
  }
})

function openForm() {
    window.open ('form.html','_self',false)
}
