<div class="row">
    <div class="content well-lg">
        <?php echo form_open('game/chonchu', array('class' => 'form-horizontal', 'novalidate' => 'novalidate')); ?>
            <div class="form-group text-center">
                <div class="col-lg-4 col-lg-offset-2">
                    <?php
                    $options = array(
                        HIRAGANA          => 'Hiragana',
                        KATAKANA         => 'Katakana',
                        KANJI     => 'Kanji'
                    );

                    echo form_dropdown('type', $options, 'hiragana', 'class = "form-control"');
                    ?>
                </div>
                <div class="col-lg-4">
                    <?php
                    $data = array(
                        'name'          => 'number',
                        'value'         => '',
                        'maxlength'     => '100',
                        'size'          => '50',
                        'class'          => 'form-control',
                        'placeholder'   => 'Nhập số lượng chữ cái, mặc định 10'
                    );

                    echo form_input($data);
                    ?>
                </div>
            </div>

        <div class="form-group">
            <div class="col-lg-2 col-lg-offset-2 text-left">
                <button type="submit" class="btn-lg btn-info">Start</button>
            </div>
        </div>
        <?php echo form_close(); ?>
    </div>
</div>
