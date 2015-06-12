<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Hiragana extends MY_Controller {

    function __construct()
    {
        parent::__construct();
        $this->load->model('t_hiragana');
    }

    public function index()
    {
        $this->view('default', 'hiragana', $this->data);
    }

    public function show_hiragana(){
        $array = $this->t_hiragana->get_all_data();
        $i = 0;
        foreach ($array as $key => $value) {
            $i++;
            echo $value['Hira'] . '  ' . $value['PRON'] . '  ';
            if ($i == 5) {
                echo '<br>';
                $i = 0;
            }
        }
    }
    public function chonchu(){
        $hiragana = $this->t_hiragana->get_all_data();
        $this->data['hiragana'] = json_encode($hiragana);
        $this->view('default', 'hiragana_game/chonchu', $this->data);
    }
}
