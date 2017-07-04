<div class="sidebar--group">
  <h3>I Want to Read About...</h3>

  <ul class="list-unstyled sidebar--categories">
    <?php echo wp_list_categories(array(
      'orderby'    => 'name',
      'show_count' => true,
      'include' => array(73,74,75,76),
      'title_li' => ''
      ))
    ?>
  </ul>
</div>
