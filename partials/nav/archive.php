<?php $GLOBALS['archive-nav'] = []; ?>

<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="/archives">Archive</a>
  <div class="megarow">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-3">
          <p><a href="/"><img src="https://minafi.com/wp-content/uploads/2017/09/minafi.com-2-400x200.png" /></a></p>
          <p><a href="/"><img src="https://minafi.com/wp-content/uploads/2017/09/Header-Twitter5-400x200.png" /></a></p>
          <p><a href="/archives" class="btn btn-block btn-primary">All Articles</a></p>
        </div>

        <div class="col-9 card-deck cards">
          <?php $category="investing"; include(get_template_directory().'/partials/nav/category.php'); ?>
          <?php $category="financial-independence"; include(get_template_directory().'/partials/nav/category.php'); ?>
          <?php $category="minimalism"; include(get_template_directory().'/partials/nav/category.php'); ?>
          <div class="w-100"></div>
          <?php $category="mindfulness"; include(get_template_directory().'/partials/nav/category.php'); ?>
          <?php $category="goals"; include(get_template_directory().'/partials/nav/category.php'); ?>
          <?php $category="personal"; include(get_template_directory().'/partials/nav/category.php'); ?>
        </div>
      </div>
    </div>
  </div>
</li>
