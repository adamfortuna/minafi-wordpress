<div class="home--hero mt-3 mb-3">
  <div class="home--hero-content container wide-container home--text">
    <div class="row">

      <div class='col-xl-8 col-md-6 col-sm-12'>
        <div class="hero--text-content px-3 hero--text col-xl-7 col-md-10">
          <h1><?php echo get_bloginfo("name"); ?></h1>
          <p>
            <?php echo get_bloginfo("description"); ?>
            <a href="/about">Read more</a>
          </p>
        </div>
      </div>
      <div class='col-xl-4 col-md-6 col-sm-12 float-right'>
        <div class="home--hero-email mt-3">
          <?php include('email-sidebar.php'); ?>
        </div>
      </div>
    </div>
  </div>
</div>
