const tabClassName = 'tab-header__item';
const tabContentClassName = 'tab-content__item';
const tabClassNameActive = ' active';
const tabContentNameActive = ' active-content';

const tabsArray = [
    {
        'name': 'Tesla',
        'content': {
            'title': 'Nikola Tesla',
            'subtitle': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, asperiores?',
            'content': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit labore, in a sed nostrum illum voluptates vel distinctio quam similique autem reprehenderit voluptatibus possimus dolore pariatur soluta eum qui. Deleniti.'
        }
    },

    {
        'name': 'da Vinci',
        'content': {
            'title': 'Leonardo da Vinci',
            'subtitle': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, asperiores?',
            'content': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit labore, in a sed nostrum illum voluptates vel distinctio quam similique autem reprehenderit voluptatibus possimus dolore pariatur soluta eum qui. Deleniti.'
        }
    },

    {
        'name': 'Einstein',
        'content': {
            'title': 'Albert Einstein',
            'subtitle': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, asperiores?',
            'content': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit labore, in a sed nostrum illum voluptates vel distinctio quam similique autem reprehenderit voluptatibus possimus dolore pariatur soluta eum qui. Deleniti.'
        }
    },

    {
        'name': 'Newton',
        'content': {
            'title': 'Newton',
            'subtitle': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, asperiores?',
            'content': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit labore, in a sed nostrum illum voluptates vel distinctio quam similique autem reprehenderit voluptatibus possimus dolore pariatur soluta eum qui. Deleniti.'
        }
    },
];

const tabsContainer = document.querySelector('.tab-header__list');
const tabContentsContainer = document.querySelector('.tab-content__list');

fillWithData();

const tabs = document.querySelectorAll('.tab-header__item');
const tabContents = document.querySelectorAll('.tab-content__item');


for(let i = 0; i < tabs.length; ++i) {
    tabs[i].addEventListener('click', function() {
        activate(this, tabs, ' active');
        activate(tabContents[i], tabContents, ' active-content');
    });
}

function activate(element, list, className) {
    for(let item of list) {
        if(item.classList.length > 1) {
            item.className = item.className.replace(className, '');
        }
    }

    element.className += className;
}

function fillWithData() {
    for(let i = 0; i < tabsArray.length; ++i) {
        const li = document.createElement('li');
        li.innerText = tabsArray[i].name;
        li.className = tabClassName;
        if(!i) { // i = 0 => if (i == 0) => !(false) => true
            li.className += tabClassNameActive;
        }
        tabsContainer.append(li);
    }

    for(let i=0; i < tabsArray.length; ++i) {
        const li = document.createElement('li');

        li.className = tabContentClassName;

        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const p2 = document.createElement('p');

        h2.innerText = tabsArray[i].content.title;
        p.innerText = tabsArray[i].content.subtitle;
        p2.innerText = tabsArray[i].content.content;

        article.append(h2);
        article.append(p);
        article.append(p2);

        if(!i) { // i = 0 => if (i == 0) => !(false) => true
            li.className += tabContentNameActive;
        }

        li.append(article);
        
        tabContentsContainer.append(li);
    }
}