<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function all_customer() {
        $customer = Customer::orderBy('id','DESC')->get();

        return response()->json([
            'customers' => $customer
        ], 200);
    }
}
