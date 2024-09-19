"use strict";(self.webpackChunkctrlpanel=self.webpackChunkctrlpanel||[]).push([[8858],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),i=t(3743);const o="tableOfContentsInline_prmo";function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return a.createElement("div",{className:o},a.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null}))}},3743:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(3117),i=t(7294),o=t(6668);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function d(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function p(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=d(l,{anchorTopOffset:t.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:o}=e;return n.length?i.createElement("ul",{className:o?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const m=i.memo(u);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const g=(0,o.L)(),f=c??g.tableOfContents.minHeadingLevel,k=u??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>l({toc:r(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:f,maxHeadingLevel:k});return p((0,i.useMemo)((()=>{if(s&&d)return{linkClassName:s,linkActiveClassName:d,minHeadingLevel:f,maxHeadingLevel:k}}),[s,d,f,k])),i.createElement(m,(0,a.Z)({toc:v,className:t,linkClassName:s},h))}},2718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=t(3117),i=(t(7294),t(3905)),o=t(3901),r=t(4996);const l={sidebar_position:1},s="Getting started",d={unversionedId:"Installation/getting-started",id:"version-0.9.1/Installation/getting-started",title:"Getting started",description:"It is recommended that you have some sort of Linux and MariaDB experience before installing this.",source:"@site/versioned_docs/version-0.9.1/Installation/getting-started.md",sourceDirName:"Installation",slug:"/Installation/getting-started",permalink:"/docs/Installation/getting-started",draft:!1,editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/versioned_docs/version-0.9.1/Installation/getting-started.md",tags:[],version:"0.9.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Additional Configuration",permalink:"/docs/Installation/additional-configuration"}},c={},p=[{value:"Dependencies",id:"dependencies",level:2},{value:"Example Dependency Installation",id:"example-dependency-installation",level:3},{value:"Extra Dependency Used on this Dashboard",id:"extra-dependency-used-on-this-dashboard",level:3},{value:"Installing Composer",id:"installing-composer",level:3},{value:"Download Files",id:"download-files",level:2},{value:"Database Setup",id:"database-setup",level:2},{value:"Installing \u0421omposer Packages",id:"installing-\u0441omposer-packages",level:2},{value:"Web server Configuration",id:"web-server-configuration",level:2},{value:"How to add this config",id:"how-to-add-this-config",level:3},{value:"Example Nginx Config",id:"example-nginx-config",level:3},{value:"Enable Configuration",id:"enable-configuration",level:3},{value:"Adding SSL",id:"adding-ssl",level:3},{value:"Set Permissions",id:"set-permissions",level:3},{value:"Queue Listeners",id:"queue-listeners",level:2},{value:"Crontab Configuration",id:"crontab-configuration",level:3},{value:"Create Queue Worker",id:"create-queue-worker",level:3},{value:"Running the installer",id:"running-the-installer",level:2},{value:"Navigate to <code>https://yourdomain.com/install</code> to run the Web-Installer and follow the steps.",id:"navigate-to-httpsyourdomaincominstall-to-run-the-web-installer-and-follow-the-steps",level:4}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended that you have some sort of Linux and MariaDB experience before installing this.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Warning, The dashboard is currently in pre-release and may contain some bugs. Use This dashboard at your own risk.")),(0,i.kt)(o.Z,{toc:p,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PHP ",(0,i.kt)("inlineCode",{parentName:"li"},"8.1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"8.2"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"8.3")," (recommended) with the following extensions: ",(0,i.kt)("inlineCode",{parentName:"li"},"cli"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"openssl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gd"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PDO"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mbstring"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenizer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bcmath"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"xml")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"dom"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"curl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zip"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"fpm")," if you are planning to use NGINX."),(0,i.kt)("li",{parentName:"ul"},"MySQL ",(0,i.kt)("inlineCode",{parentName:"li"},"5.7.22")," or higher (MySQL ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," recommended) ",(0,i.kt)("strong",{parentName:"li"},"or")," MariaDB ",(0,i.kt)("inlineCode",{parentName:"li"},"10.2")," or higher."),(0,i.kt)("li",{parentName:"ul"},"A web server (Apache, NGINX, Caddy, etc.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"composer")," v2")),(0,i.kt)("h3",{id:"example-dependency-installation"},"Example Dependency Installation"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you already have Pterodactyl installed, please check that you also install PHP 8.3!")),(0,i.kt)("p",null,"The commands below are simply an example of how you might install these dependencies. Please consult with your\noperating system's package manager to determine the correct packages to install."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Add "add-apt-repository" command\napt -y install software-properties-common curl apt-transport-https ca-certificates gnupg\n\n# Add additional repositories for PHP (Ubuntu 20.04 and Ubuntu 22.04)\nLC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php\n\n# MariaDB repo setup script (Ubuntu 20.04)\ncurl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash\n\n# Update repositories list\napt update\n\n# Install Dependencies\napt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx git\n')),(0,i.kt)("h3",{id:"extra-dependency-used-on-this-dashboard"},"Extra Dependency Used on this Dashboard"),(0,i.kt)("p",null,"You need to install this, use the appropriate PHP version (php -v)\nExtra dependency used for handling currency's"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt -y install php8.3-intl\n")),(0,i.kt)("h3",{id:"installing-composer"},"Installing Composer"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you already have Pterodactyl installed, you can skip this step!")),(0,i.kt)("p",null,"Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll\nneed composer installed before continuing in this process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer\n")),(0,i.kt)("h2",{id:"download-files"},"Download Files"),(0,i.kt)("p",null,"The first step in this process is to create the folder where the panel will live and then move ourselves into that\nnewly created folder. Below is an example of how to perform this operation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/controlpanel && cd /var/www/controlpanel\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Ctrlpanel-gg/panel.git ./\n")),(0,i.kt)("h2",{id:"database-setup"},"Database Setup"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You will need a database setup and a database user with the correct permissions created for that database before\ncontinuing any further.")),(0,i.kt)("p",null,"To make a database and database user, you can follow this guide.\nThis is for MariaDB. Please change the USE_YOUR_OWN_PASSWORD part to your password. Also, 127.0.0.1 is for localhost. Please have basic knowledge of Linux before attempting this. Use at your own responsibility."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\nCREATE DATABASE controlpanel;\nCREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nEXIT;\n")),(0,i.kt)("h2",{id:"installing-\u0441omposer-packages"},"Installing \u0421omposer Packages"),(0,i.kt)("p",null,"First, we will have to install all composer packages.\nFor this, run the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader\n")),(0,i.kt)("h2",{id:"web-server-configuration"},"Web server Configuration"),(0,i.kt)("p",null,"You should paste the contents of the file below, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"<domain>")," with your domain name being used in a file called ctrlpanel.conf and place it in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/"),", or \u2014 if on CentOS, ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/.")),(0,i.kt)("h3",{id:"how-to-add-this-config"},"How to add this config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nano /etc/nginx/sites-available/ctrlpanel.conf\n")),(0,i.kt)("h3",{id:"example-nginx-config"},"Example Nginx Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n        listen 80;\n        root /var/www/controlpanel/public;\n        index index.php index.html index.htm index.nginx-debian.html;\n        server_name YOUR.DOMAIN.COM;\n\n        location / {\n                try_files $uri $uri/ /index.php?$query_string;\n        }\n\n        location ~ \\.php$ {\n                include snippets/fastcgi-php.conf;\n                fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;\n        }\n\n        location ~ /\\.ht {\n                deny all;\n        }\n}\n")),(0,i.kt)("h3",{id:"enable-configuration"},"Enable Configuration"),(0,i.kt)("p",null,"The final step is to enable your NGINX configuration and restart it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You do not need to symlink this file if you are using CentOS.\nsudo ln -s /etc/nginx/sites-available/ctrlpanel.conf /etc/nginx/sites-enabled/ctrlpanel.conf\n\n# Check for nginx errors\nsudo nginx -t\n\n# You need to restart nginx regardless of OS. only do this you haven't received any errors\nsystemctl restart nginx\n")),(0,i.kt)("h3",{id:"adding-ssl"},"Adding SSL"),(0,i.kt)("p",null,"There are many ways to add SSL to your site. A simple solution is to use Cert bot from Let\u2019s Encrypt. Cert bot will automatically install the certificates for you and keep your SSL certifications up to date!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n#install certbot for nginx\nsudo apt install -y certbot\nsudo apt install -y python3-certbot-nginx\n#install certificates\nsudo certbot --nginx -d yourdomain.com\n")),(0,i.kt)("h3",{id:"set-permissions"},"Set Permissions"),(0,i.kt)("p",null,"The last step in the installation process is to set the correct permissions on the Panel files so that the web server can\nuse them correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nchown -R www-data:www-data /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n# If using NGINX on CentOS:\nchown -R nginx:nginx /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n# If using Apache on CentOS\nchown -R apache:apache /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n****\n")),(0,i.kt)("p",null,"Once this is done, you should be able to access the dashboard via your web browser."),(0,i.kt)("h2",{id:"queue-listeners"},"Queue Listeners"),(0,i.kt)("h3",{id:"crontab-configuration"},"Crontab Configuration"),(0,i.kt)("p",null,"The first thing we need to do is create a new cron job that runs every minute to process specific Dashboard tasks such as billing users hourly and suspending unpaid servers. To open the crontab run: ",(0,i.kt)("inlineCode",{parentName:"p"},"crontab -e")," and paste the following configuration into crontab."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1\n")),(0,i.kt)("h3",{id:"create-queue-worker"},"Create Queue Worker"),(0,i.kt)("p",null,"Next, you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible for sending emails and handling many other background tasks for the Dashboard."),(0,i.kt)("p",null,"Create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrlpanel.service")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," with the contents below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Ctrlpanel Queue Worker File\n# ----------------------------------\n\n[Unit]\nDescription=Ctrlpanel Queue Worker\n\n[Service]\n# On some systems the user and group might be different.\n# Some systems use `apache` or `nginx` as the user and group.\nUser=www-data\nGroup=www-data\nRestart=always\nExecStart=/usr/bin/php /var/www/controlpanel/artisan queue:work --sleep=3 --tries=3\nStartLimitBurst=0\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("p",null,"Finally, enable the service and set it to boot on machine start."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now ctrlpanel.service\n")),(0,i.kt)("h2",{id:"running-the-installer"},"Running the installer"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you see the error ",(0,i.kt)("strong",{parentName:"p"},'"php version: 8.3.6 (minimum required 8.1)"')," on the main installer page, then just ignore it. This is due to the specifics of checking version compatibility. PHP8.3 has been tested and works stably!"),(0,i.kt)("img",{src:(0,r.Z)("/img/userguides/installer-error.png")})),(0,i.kt)("h4",{id:"navigate-to-httpsyourdomaincominstall-to-run-the-web-installer-and-follow-the-steps"},"Navigate to ",(0,i.kt)("inlineCode",{parentName:"h4"},"https://yourdomain.com/install")," to run the Web-Installer and follow the steps."),(0,i.kt)("p",null,"If you encounter problems with the email setup, you can use the skip button and set it up later."),(0,i.kt)("p",null,"Once the Web-Installer has been completed, you will be navigated to the login-page of your installation."))}m.isMDXComponent=!0}}]);