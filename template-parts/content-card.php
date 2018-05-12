<?php $read_time = do_shortcode('[rt_reading_time label="" postfix="min read." postfix_singular="min read."]') ?>

<article class="card">
  <a href='<?php echo esc_url(get_permalink()); ?>' class="article--header-image mb-0">
    <div class="post-thumbnail thumbnail--small card-img-top">
      <div class="article--header-overlay"></div>
      <?php
        $count = get_comments_number();
        $comments = sprintf(_n( '%s Comment', '%s Comments', $count), $count );
      ?>
      <span class="article--comments-count"><?php echo $comments ?></span>

      <?php
        if(has_post_thumbnail()) {
      		the_post_thumbnail('medium');
        } else { ?>
          <img src="<?php echo get_template_directory_uri() ?>/assets/images/default-medium.jpeg" />
        <?php }
      ?>
    </div>
  </a>

  <header class="article--header article-header--hero p-2 card-body">
    <h2 class="card-title"><a href='<?php echo esc_url(get_permalink()); ?>'><?php the_title(); ?></a></h2>
  </header>

  <footer class="card-footer p-2">

    <div class="article--header-meta">
      <span class="article--header-meta-date">
        <?php the_time( get_option('date_format') ); ?>.
      </span>
      <?php echo $read_time ?>
    </div>

    <?php
      // SHOW YOAST PRIMARY CATEGORY, OR FIRST CATEGORY
      $category = get_the_category();
      $useCatLink = true;
      // If post has a category assigned.
      if ($category){
      	$category_display = '';
      	$category_link = '';
      	if ( class_exists('WPSEO_Primary_Term') )
      	{
      		// Show the post's 'Primary' category, if this Yoast feature is available, & one is set
      		$wpseo_primary_term = new WPSEO_Primary_Term( 'category', get_the_id() );
      		$wpseo_primary_term = $wpseo_primary_term->get_primary_term();
      		$term = get_term( $wpseo_primary_term );
      		if (is_wp_error($term)) {
      			// Default to first category (not Yoast) if an error is returned
      			$category_display = $category[0]->name;
      			$category_link = get_category_link( $category[0]->term_id );
      		} else {
      			// Yoast Primary category
      			$category_display = $term->name;
      			$category_link = get_category_link( $term->term_id );
      		}
      	}
      	else {
      		// Default, display the first category in WP's list of assigned categories
      		$category_display = $category[0]->name;
      		$category_link = get_category_link( $category[0]->term_id );
      	}
      	// Display category
      	if ( !empty($category_display) ){
      	    if ( $useCatLink == true && !empty($category_link) ){
      		echo '<span class="post-category">';
      		echo '<a href="'.$category_link.'">'.htmlspecialchars($category_display).'</a>';
      		echo '</span>';
      	    } else {
      		echo '<span class="post-category">'.htmlspecialchars($category_display).'</span>';
      	    }
      	}
      }
     ?>
  </footer>
</article>
