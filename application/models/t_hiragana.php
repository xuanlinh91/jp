<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

/**
 *T_User
 *Description: model manage t_purpose
 * @author quanhm
 */
Class T_hiragana extends CI_Model
{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->table_name = 'hiragana';
    }

    public function get_all_data()
    {
        $this->db->select("*");
        $this->db->from($this->table_name);
        $query = $this->db->get()->result_array();
        return ($query);
    }
}