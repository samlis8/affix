export const createAffixNav = params => {
    params = params || {};
    const visibleHeight = document.documentElement.clientHeight;
    const contentList = document.querySelectorAll('[data-navto]');

    // 初始化.
    // 创建导航.
    let navFrag = document.createDocumentFragment(),
        navBoxes = document.createElement('nav'),
        navBtnGroup = document.createElement('div'),
        navList = [];
    navBtnGroup.className = params.navButtonBoxesClass || 'notek-btn-group notek-btn-group-vertical';
    navBoxes.className = params.navClass || 'nav';
    contentList.forEach(cb => {
        // 创建导航元素.
        let navName = cb.dataset.navto;
        let navEle = document.createElement('a');
        navEle.className = params.navButtonClass || 'notek-btn';
        navEle.innerHTML = navName;
        navFrag.appendChild(navEle);
        navList.push(navEle);

        // 绑定导航元素和内容的跳转链接.
        cb.id = navName;
        navEle.href = `#${navName}`;
    });
    navBtnGroup.appendChild(navFrag);
    navBoxes.appendChild(navBtnGroup);
    document.body.appendChild(navBoxes);
    navFrag = navBoxes = navBtnGroup = null;

    // 设置菜单状态.
    const setNavStatus = () => {
        contentList.forEach((cb, i) => {
            let contentVisibleHeight = cb.getBoundingClientRect().top;

            if(contentVisibleHeight <= visibleHeight && contentVisibleHeight <= 0) {
                // 处于当前状态的菜单才有class.
                navList[i].classList.add('notek-btn-primary');
                if((contentVisibleHeight + cb.offsetHeight) <= 0) {
                    navList[i].classList.remove('notek-btn-primary');
                }
            }else {
                navList[i].classList.remove('notek-btn-primary');
            }
        });
    };
    setNavStatus();

    // 绑定滚动事件.
    document.addEventListener('scroll', setNavStatus, false);
};