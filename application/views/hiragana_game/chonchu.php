<script type="text/javascript">
    var hiragana = <?php echo $hiragana;?>;
    var page = 'hiragana-chonchu';
</script>
<div class="row">
    <div class="content well-lg">
        <?php echo form_open('', array('class' => 'form-horizontal', 'novalidate' => 'novalidate')); ?>
            <div class="center-character"></div>
        <table class="table">
            <tr>
                <td><?php
                    echo form_input(array('type' => 'button', 'id' => 'btn_1', 'name' => 'btn-1', 'class' => 'hiragana-chonchu-click form-control btn btn-info'));
                    ?></td>
                <td><?php
                    echo form_input(array('type' => 'button', 'id' => 'btn_2', 'name' => 'btn-2', 'class' => 'hiragana-chonchu-click form-control btn btn-info'));
                    ?></td>
                <td><?php
                    echo form_input(array('type' => 'button', 'id' => 'btn_3', 'name' => 'btn-3', 'class' => 'hiragana-chonchu-click form-control btn btn-info'));
                    ?></td>
                <td><?php
                    echo form_input(array('type' => 'button', 'id' => 'btn_4', 'name' => 'btn-4', 'class' => 'hiragana-chonchu-click form-control btn btn-info'));
                    ?></td>
                <td><?php
                    echo form_input(array('type' => 'button', 'id' => 'btn_5', 'name' => 'btn-5', 'class' => 'hiragana-chonchu-click form-control btn btn-info'));
                    ?></td>
            </tr>
        </table>

        <?php echo form_close(); ?>
    </div>
</div>
