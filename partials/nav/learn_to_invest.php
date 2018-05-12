<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="/category/investing">Learn To Invest</a>
  <div class="megarow">
    <div class="container">
      <div class="row">
        <div class="card-deck cards card--pages">
          <?php wp_nav_menu( array(
            'theme_location' => 'learn-to-invest-menu',
            'container' => false,
            'walker'  => new WalkerCard()
            )); ?>

          <a href="/category/investing" class="card--next-arrow"><i class="fa fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</li>
