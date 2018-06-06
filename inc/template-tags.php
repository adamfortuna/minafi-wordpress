<?php

  function use_slim_container() {
    $template = explode(".", basename(get_page_template()))[0];
    if($template == 'all') { return false; }
    return is_singular();
  }

  if ( ! function_exists( 'minafi_related_posts' ) ) {
    function minafi_related_posts() {
      $orig_post = $post;
      global $post;
      $categories = wp_get_post_categories($post->ID);

      if ($categories) {
        $category_ids = array();
        foreach($categories as $individual_category) {
          $category_ids[] = $individual_category;
        }

        $args=array(
            'category__in' => $category_ids,
            'post__not_in' => array($post->ID),
            'posts_per_page'=>3, // Number of related posts to display.
            'caller_get_posts'=>1
        );

      $my_query = new wp_query( $args );

      ?>
      <div class="row articles--list articles--group">
      <?php
        while( $my_query->have_posts() ) {
          $my_query->the_post();
          get_template_part( 'template-parts/content-related', get_post_format() );
        }
      }
      ?>
      </div>
      <?php

      $post = $orig_post;
      wp_reset_query();
    }
  }

	/**
	 * Displays the optional excerpt.
	 *
	 * Wraps the excerpt in a div element.
	 *
	 * Create your own twentysixteen_excerpt() function to override in a child theme.
	 *
	 * @since Twenty Sixteen 1.0
	 *
	 * @param string $class Optional. Class string of the div element. Defaults to 'entry-summary'.
	 */
	function minafi_excerpt( $class = 'lead' ) {
		$class = esc_attr( $class );

		if ( has_excerpt()) : ?>
			<div class="<?php echo $class; ?>">
				<?php the_excerpt(); ?>
			</div>
		<?php endif;
	}


  // If a post has the tag "affiliate"
  function post_has_affiliate_link() {
    return has_tag("affiliate");
  }

  function get_last_updated_date() {
    $u_time = get_the_time('U');
    $u_modified_time = get_the_modified_time('U');
    $custom_content = '';
    if ($u_modified_time >= $u_time + 604800) {
      $updated_date = get_the_modified_time('F jS, Y');
      $updated_time = get_the_modified_time('h:i a');
      $custom_content .= 'Updated '. $updated_date .'.';
    }
    return $custom_content;
  }

  function updated_after_some_time() {
    $u_time = get_the_time('U');
    $u_modified_time = get_the_modified_time('U');
    $custom_content = '';
    if($u_modified_time <= $u_time + 604800) {
      echo "hidden";
    }
  }
?>
