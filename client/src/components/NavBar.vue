<template>
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#home">Evidence NFT</a>
      <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <svg class="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
          <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg><!-- <i class="fas fa-bars"></i> Font Awesome fontawesome.com -->
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#form">Get Started</a></li>
        </ul>
      </div>
    </div>
  </nav>

</template>


<style scoped>
  .navbar-brand {
    color: white;
  }

  #mainNav {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    background-color: #2c3e50 !important;
  }

  #mainNav .navbar-brand {
    color: rgb(255, 255, 255);
  }

  #mainNav .navbar-nav {
    margin-top: 1rem;
  }

  #mainNav .navbar-nav li.nav-item a.nav-link {
    color: rgb(255, 255, 255);
  }

  #mainNav .navbar-nav li.nav-item a.nav-link:hover {
    color: rgb(26, 188, 156);
  }

  #mainNav .navbar-nav li.nav-item a.nav-link:active,
  #mainNav .navbar-nav li.nav-item a.nav-link:focus {
    color: rgb(255, 255, 255);
  }

  #mainNav .navbar-nav li.nav-item a.nav-link.active {
    color: rgb(26, 188, 156);
  }

  #mainNav .navbar-toggler {
    font-size: 80%;
    padding: 0.8rem;
  }

  @media (min-width: 992px) {
    #mainNav {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      transition: padding-top 0.3s ease 0s, padding-bottom 0.3s ease 0s;
    }
    #mainNav .navbar-brand {
      font-size: 1.75em;
      transition: font-size 0.3s ease 0s;
    }
    #mainNav .navbar-nav {
      margin-top: 0px;
    }
    #mainNav .navbar-nav > li.nav-item > a.nav-link.active {
      color: rgb(255, 255, 255);
      background: rgb(26, 188, 156);
    }
    #mainNav .navbar-nav > li.nav-item > a.nav-link.active:active,
    #mainNav .navbar-nav > li.nav-item > a.nav-link.active:focus,
    #mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover {
      color: rgb(255, 255, 255);
      background: rgb(26, 188, 156);
    }
    #mainNav.navbar-shrink {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    #mainNav.navbar-shrink .navbar-brand {
      font-size: 1.5em;
    }
  }
</style>

