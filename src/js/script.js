
jQuery(function ($) {
  /* ===============================================
  # ヘッダー
  =============================================== */

  // ハンバーガーメニュー
  $(function () {
    $(".js-hamburger").on("click", function () {
      $(this).toggleClass("is-open");
      if ($(this).hasClass("is-open")) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });

    // backgroundまたはページ内リンクをクリックで閉じる
    $(".js-drawer a[href]").on("click", function () {
      closeDrawer();
    });

    // resizeイベント
    $(window).on("resize", function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        closeDrawer();
      }
    });
  });

  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
  }

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
  }

  /* ===============================================
# メインビュースワイパー
=============================================== */
  const mv_swiper = new Swiper(".js-mv-swiper", {
    loop: true,
    speed: 2000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  
  /* ===============================================
  # 関連団体 Swiper
  =============================================== */
  
  // Corrected: Removed the dot before the class name
  const swiperSlides = document.getElementsByClassName("swiper-slide");
  const breakPoint = 768;
  let mySwiper;
  let mySwiperBool = false; // Initialized with false
  
  window.addEventListener(
    "load",
    () => {
      if (window.innerWidth < breakPoint) {
        createSwiper();
        mySwiperBool = true;
      }
    },
    false
    );
    
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth >= breakPoint && mySwiperBool) {
          mySwiper.destroy(true, true); // Ensure proper destruction
          mySwiper = undefined; // Clear the reference to the destroyed instance
          mySwiperBool = false;
        } else if (window.innerWidth < breakPoint && !mySwiperBool) {
          createSwiper();
          mySwiperBool = true;
        }
      },
      false
      );
      
      const createSwiper = () => {
        mySwiper = new Swiper(".js-relate-swiper", {
          slideToClickedSlide: true,
          spaceBetween: 40,
          slidesPerView: "auto",
          loop: true,
          speed: 2000,
          loopedSlides: swiperSlides.length, // Assumes swiperSlides is correctly defined earlier
          centeredSlides: true,
      // ページネーションの設定
      pagination: {
        el: ".swiper-pagination", // ここにページネーションのクラス名またはセレクタを指定
        clickable: true, // ユーザーがページネーションのドットをクリックしてスライドを切り替えられるようにします
      },
      // ナビゲーションボタン（前へ、次へボタン）の設定
      navigation: {
        nextEl: ".swiper-button-next", // 「次へ」ボタンのクラス名またはセレクタを指定
        prevEl: ".swiper-button-prev", // 「前へ」ボタンのクラス名またはセレクタを指定
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  };

  /* ===============================================
  # トップページへ
  =============================================== */

    $(window).on("scroll", function () {
      let scrollHeight = $(document).height();
      let scrollPosition = $(window).height() + $(window).scrollTop();
      let footHeight = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        $(".js-page-top").css({
          position: "absolute",
          bottom: footHeight + 18,
        });
      } else {
        $(".js-page-top").css({
          position: "fixed",
          bottom: "15px",
        });
        9;
      }
    });

    let topBtn = $("#page-top");
    topBtn.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
    topBtn.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500,
        "swing"
      );
      return false;
    });


  /* ===============================================
  # members-only
  =============================================== */
    $(window).on("scroll", function () {
      let scrollHeight = $(document).height();
      let scrollPosition = $(window).height() + $(window).scrollTop();
      let footHeight = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        $(".js-members-only").css({
          position: "absolute",
          bottom: footHeight + 18,
        });
      } else {
        $(".js-members-only").css({
          position: "fixed",
          bottom: "15px",
        });
        9;
      }
    });

    let membersOnly = $("#members-only");
    membersOnly.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        membersOnly.fadeIn();
      } else {
        membersOnly.fadeOut();
      }
    });
    membersOnly.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500,
        "swing"
      );
      return false;
    });






// 終了タグ
});
