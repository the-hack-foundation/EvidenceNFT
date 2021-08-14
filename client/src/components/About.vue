<template>
  <section class="page-section mb-0" id="about">
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase">About this site</h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
            <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
          </svg><!-- <i class="fas fa-star"></i> Font Awesome fontawesome.com -->
        </div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- About Section Content-->
      <div class="row">
        <div class="col-lg-4 ms-auto">
          <p class="lead"><span style="background-color: var(--bs-body-bg); color: var(--bs-body-color); font-family: var(--bs-body-font-family); font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);">In cases such as sexual harassment or domestic violence, where all you have is the word between two people, the one with more power and influence tends to win.&nbsp;</span></p>
          <p class="lead">Currently, testimonial evidence has little weight in court. It can be dismissed and not counted for many reasons such as "hear-say",&nbsp; "It was tampered with", or "it happened to long ago, they don't remember it correctly".&nbsp;</p>
        </div>
        <div class="col-lg-4 me-auto">
          <p class="lead">This tool can help. This site has a simple form for you to document and attach any testimonial evidence you have, as well as images, videos and audio. Then, when you submit, it will create a password protected, encrypted zip file to lock up your evidence, and back this up on the blockchain via NFT to establish a timestamp, prove it cannot be tampered with, and assign ownership only to you. This supercharges your evidence, and can make a difference in court.<br></p>
        </div>
      </div>
      <!-- About Section Button-->
      <div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-dark" href="#form">
          <svg class="svg-inline--fa fa-download fa-w-16 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
            <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
          </svg><!-- <i class="fas fa-download me-2"></i> Font Awesome fontawesome.com -->
          Get Started
        </a>
      </div>
    </div>
  </section>
</template>

<style>
  .page-section {
    padding: 6rem 0px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .page-section .page-section-heading {
    font-size: 2.25rem;
    line-height: 2rem;
  }

  @media (min-width: 992px) {
    .page-section .page-section-heading {
      font-size: 3rem;
      line-height: 2.5rem;
    }
  }

  .divider-custom {
    margin: 1.25rem 0px 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .divider-custom .divider-custom-line {
    width: 100%;
    max-width: 7rem;
    height: 0.25rem;
    background-color: rgb(44, 62, 80);
    border-radius: 1rem;
    border-color: rgb(44, 62, 80);
  }

  .divider-custom .divider-custom-line:first-child {
    margin-right: 1rem;
  }

  .divider-custom .divider-custom-line:last-child {
    margin-left: 1rem;
  }

  .divider-custom .divider-custom-icon {
    color: rgb(44, 62, 80);
    font-size: 2rem;
  }

  .divider-custom.divider-light .divider-custom-line {
    background-color: rgb(255, 255, 255);
  }

  .divider-custom.divider-light .divider-custom-icon {
    color: rgb(255, 255, 255);
  }

  .btn-xl {
    padding: 1rem 1.75rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  }

.me-2 {
    width: 1em !important;
}
</style>