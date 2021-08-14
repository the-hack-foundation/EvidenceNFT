<template>
  <footer class="footer text-center">
    <div class="container">
      <div class="row mb-5">
        <!-- Footer Location-->
        <div class="col-lg-2"></div>
        <!-- Footer Social Icons-->
        <div class="col-lg-8">
          <h4 class="text-uppercase mb-4">This tool was created by the H.A.C.K. Foundation</h4>
          <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook"></i></a>
          <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
          <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
          <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
        </div>
        <!-- Footer About Text-->
        <div class="col-lg-2"></div>
      </div>
    </div>
    <div class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; The H.A.C.K. Foundation 2021</small>
      </div>
    </div>
  </footer>
</template>


<script>
  export default {
    name: "Footer",
  };
</script>


<style>
  .footer {
    padding-top: 5rem;
    background-color: #2c3e50;
    color: #fff;
  }

  .copyright {
    background-color: #1a252f;
  }

  .btn-social { border-radius: 100%; display: inline-flex; width: 3.25rem; height: 3.25rem; font-size: 1.25rem; justify-content: center; align-items: center; }

</style>