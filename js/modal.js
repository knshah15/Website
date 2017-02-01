;(function(document){
// ---------------------------------------------------------------------

    // ----------------------------
    // Templating functions
    // ----------------------------
    
    var compileContactButton = function(text){
        return [
            '<div class="col-sm-12">',
                '<button type="button" class="btn btn-primary contactBtn">',
                    (text.toUpperCase()),
                '</button>',
            '</div>'
        ].join('')
    };

    var compileContentHeader = function(contentHeader){
        return [
            '<div class="col-sm-12">',
                  '<p class="modal-body-content">',
                      (contentHeader),
                  '<p>',
            '</div>'
        ].join('')
    };

    var compileContentGroup = function(contentGroupColWidth, contentGroupTitle, contentGroupSubTitle, contentGroupEntries){
        return [
            '<div class="col-sm-'+(contentGroupColWidth)+'">',
                '<div class="panel panel-default">',
                    '<div class="panel-heading">',
                        '<h3 class="panel-title">'+(contentGroupTitle)+'</h3>',
                         (function(){
                             return contentGroupSubTitle ? '<p style="margin-top:6px; margin-left:2px;">'+(contentGroupSubTitle)+'<p>' : ''
                         }()),
                    '</div>',
                    '<ul class="list-group">',
                        (contentGroupEntries.map(function(contentGroupEntry){
                            return '<li class="list-group-item">'+(contentGroupEntry)+'</li>' 
                        }).join('')),
                    '</ul>',                              
                '</div>',           
            '</div>'
        ].join('')
    };

    var compileContentGroups = function(contentGroupColWidth, contentGroups){
        return contentGroups.map(function(contentGroup){
            return compileContentGroup(contentGroupColWidth, contentGroup.title, contentGroup.subTitle, contentGroup.entries);
        }).join('')
    };

    // ----------------------------
    // Content Store
    // ----------------------------
    var contentStore = {
        excel : {
            header : 'Practical Microsoft Excel Training (Mac or PC)',
            subHeader : 'Practical Microsoft Excel training focused on real-world business projects and assignments. Here are a sample of topic areas I can help you master.',
            contactBtn : 'Contact to Schedule Training',
            contentGroupColWidth : '6',
            contentGroups : [
                {
                    title : 'Beginner Topics',
                    entries : [
                        'Spreadsheet Fundamentals',
                        'Navigating Excel',
                        'Entering Data',
                        'Basic Formatting',
                        'Basic Formulas'
                    ]
                },
                {
                    title : 'Presenting Information',
                    entries : [
                        'Building Charts',
                        'Building Graphs',
                        'Formatting Spreadsheets',
                        'Cell Formatting',
                        'Conditional Formatting'
                    ]
                },
                {
                    title : 'Working with Formulas',
                    entries : [
                        'Commonly-Used Excel Formulas',
                        '"IF" Statements',
                        'VLOOKUP and HLOOKUP',
                        'Complex Formulas',
                        'Absolute and Relative References'
                    ]
                },
                {
                    title : 'Data Analysis',
                    entries : [
                        'Sorting and Filtering Data',
                        'Working with Large Data Sets',
                        'Pivot Tables',
                        'Excel Data Analysis Toolpak',
                        'Regression and Statistical Analysis'
                    ]
                },
                {
                    title : 'Budgeting, Finance and Accounting',
                    entries : [
                        'Building Financial Statements',
                        'Financial Modeling',
                        'Building Projections',
                        'Formatting and Reporting',
                        'Financial Analysis'
                    ]
                },
                {
                    title : 'Advanced Topics',
                    entries : [
                        'Excel Macros',
                        'Visual Basic',
                        'Iteration and Circular References',
                        'Advanced Lookups (Index, Match, Offset)',
                        'Advanced Formulas'    
                    ]
                }
            ]
        },
        powerpoint : {
            header : 'Practical Microsoft PowerPoint Training (Mac or PC)', 
            subHeader : 'Practical Microsoft PowerPoint training that covers the basics and goes beyond so you can create powerful, effective presentations for a wide range of business purposes. Here are a sample of topic areas I can help you master.',
            contactBtn : 'Contact to Schedule Training',
            contentGroupColWidth : '12',
            contentGroups : [
                {
                    title : 'Beginner Topics',
                    entries : [
                        'Creating basic presentations',
                        'Working with templates',
                        'Using textboxes, shapes and graphics',
                        'Adding animations',
                        'Proper use of text and styles'
                    ]
                },
                {
                    title : 'Sales and Business Presentations',
                    entries : [
                        'Choosing the right format for your audience',
                        'Structuring your presentation',
                        'Writing powerful headings and content',
                        'Incorporating charts and data',
                        'Aligning and formatting for a clean, professional look'
                    ]
                },
                {
                    title : 'Brochures and Marketing Materials',
                    entries : [
                        'Creating custom business themes for your brand',
                        'Writing content that speaks to your audience',
                        'Highlighting your value proposition',
                        'Using shapes and objects in creative ways',
                        'Best-practices for fonts, colors and content'   
                    ]
                }
            ]
        },
        word : {
            header : 'Practical Microsoft Word Training (Mac or PC)',
            subHeader : 'Practical Microsoft Word training that covers the basics and goes beyond to teach you the guidelines and best-practices to create professional business documents. Here are a sample of topic areas I can help you master.',
            contactBtn : 'Contact to Schedule Training',
            contentGroupColWidth : '12',
            contentGroups : [
                {
                    title : 'Beginner Topics',
                    entries : [
                        'Overview of functionality to get you going',
                        'Working with fonts, colors and text styles',
                        'Inserting shapes and graphics',
                        'Final touches: page numbers, contents and more',
                        'Formatting best-practices and common pitfalls'
                    ]
                },
                {
                    title : 'Business Cases and Proposals',
                    entries : [
                        'Structuring your document',
                        'Know the important sections to include',
                        'Incorporating financial forecasts and data',
                        'Working with charts and graphs in Word',
                        'Using a table of contents and applying polish'
                    ]
                },
                {
                    title : 'Brochures and Marketing Materials',
                    entries : [
                        'Creating impactful brochures and datasheets',
                        'Writing content that speaks to your audience',
                        'Highlighting your value proposition',
                        'Formatting for brochures, flyers and mailers',
                        'Best-practices for fonts, colors and content'
                    ]
                }
            ]
        },
        career : {
            header : 'Does Your Resume Standout?',
            subHeader : 'Recruiters and hiring managers receive hundreds of resumes for positions. Make sure that yours stands out and gets selected. Once you start applying, be prepared to maximize your chance of getting the job. Here is how Skill Seeker can help you with both resumes and interview preparation.',
            contactBtn : 'Contact to Schedule Training',
            contentGroupColWidth : '12',
            contentGroups : [
                {
                    title : 'Resume Preparation',
                    entries : [
                        'Working with Skill Seeker to create a strong, professional resume that positions you in the best way is easy. First, we will meet in person or speak over the phone to go over your background, current resume (if you have one), and the jobs you are interested in.',
                        'After we speak, I will incorporate everything I learned about your background and goals and create a resume template that you can use for years to come. If you have any feedback or edits on the final product, I will be happy to incorporate them so that you are satisfied.'
                    ]
                },
                {
                    title : 'Interview Preparation',
                    subTitle : 'Preparation and practice are the keys to successfully nailing a job interview. I will work with you, one-on-one, to coach you for your upcoming interviewing. Here is my approach for preparing my clients for interviews:',
                    entries : [
                        'Review best-practices and strategies for interviewing',
                        'Review of the companies and roles you are interested in',
                        'Mock interviews, customized to the role and company you are interest in',
                        'Practice with dozens of interview questions until you feel fully prepared'
                    ]
                }
            ]
        },
        computerskills : {
            header : 'Computer Essentials, Website Creation and Online Marketing',
            subHeader : 'Computer and web training to get you comfortable with computing. Once we cover the basics, we can dive more deeply into technologies you are interested in, like creating your own website and marketing it online.',
            contactBtn : 'Contact to Schedule Training',
            contentGroupColWidth : '12',
            contentGroups : [
                {
                    title : 'Basic Use of Mac or PC',
                    entries : [
                        'Setup and configuration',
                        'Overview of main components',
                        'Running programs',
                        'Using browsers and downloading programs',
                        'Essential troubleshooting'
                    ]
                },
                {
                    title : 'Setting up Websites',
                    entries : [
                        'Free tools to create your website',
                        'Choosing a domain',
                        'Hosting your site',
                        'Customizing your site',
                        'Working with HTML and CSS'
                    ]
                },
                {
                    title : 'Marketing Your Business Online',
                    entries : [
                        'Digital marketing basics',
                        'Showing up in maps and search results',
                        'Running online advertisements',
                        'Measuring the performance of your site',
                        'Best practices for content'
                    ]
                }
            ]  
        },
        partnership : {
            header : 'Corporate Training Services',
            subHeader : 'I partner with local businesses to provide cost-effective group training. I will work with you to create a customized training program and deliver the training at your offices. Please see below for a sample of training areas.',
            contactBtn : 'Contact to Schedule Training',
            contentGroupColWidth : '12',
            contentGroups : [
                {
                    title : 'Training for Businesses',
                    entries : [
                        'Data Analysis in Microsoft Excel',
                        'Presentation and Formatting in Microsoft Excel',
                        'Formulas, Macros and Advanced Tools in Microsoft Excel',
                        'Financial Forecasting and Planning in Microsoft Excel'
                    ]
                }
            ]
        }
    };


    // ----------------------------
    // DOM API Interactions
    // ----------------------------
    var getChosenTrainingCategory = function(event){
        return $(event.relatedTarget).data('whatever');
    };
    
    var setModalHeader = function(modalNode, header){
        modalNode.find('.modal-title').text(header);
    };

    var setModalContent = function(contentContainerNode, contentNode, contentHTML){
        contentContainerNode.innerHTML = '';
        contentNode.innerHTML = '';
        contentNode.innerHTML = contentHTML;
        contentContainerNode.appendChild(contentNode);
    };

    var setContactBtnEventHandler = function(modalNode){
        modalNode.on('click', '.contactBtn', function(e) {
            e.preventDefault();
            window.open('form.html', '_self', false);
        });
    };

    var renderModalContent = function(modalNode, contentContainerNode, contentNode, modalHeader, contentHTML){
        setModalHeader(modalNode, modalHeader);
        setModalContent(contentContainerNode, contentNode, contentHTML);
    };

    var setModalEventHandler = function(modalNode){
        var contentCache = {};
        var contentContainerNode = document.getElementById('modalBodyContent');
        var contentNode = document.createElement('div');
        contentNode.className = 'row';

        modalNode.on('show.bs.modal', function(event){
            var trainingCategory = getChosenTrainingCategory(event);

            if (!contentCache[trainingCategory]) {
                var categoryContentStore = contentStore[trainingCategory];
                var contentHeader = compileContentHeader(categoryContentStore.subHeader);
                var contentGroups = compileContentGroups(
                    categoryContentStore.contentGroupColWidth,
                    categoryContentStore.contentGroups
                );
                var contactBtn = compileContactButton(categoryContentStore.contactBtn);

                contentCache[trainingCategory] = {};
                contentCache[trainingCategory].modalHeader = categoryContentStore.header;
                contentCache[trainingCategory].contentHTML = contentHeader + contentGroups + contactBtn;
            }

            renderModalContent(
                $(this),
                contentContainerNode,
                contentNode,
                contentCache[trainingCategory].modalHeader,
                contentCache[trainingCategory].contentHTML
            );
        });
    };
    

    // ----------------------------
    // Init
    // ----------------------------
    var init = function(){
        var modalNode = $('#exampleModal');  
        setModalEventHandler(modalNode);
        setContactBtnEventHandler(modalNode);
    };


    init();
// ---------------------------------------------------------------------
}(document));