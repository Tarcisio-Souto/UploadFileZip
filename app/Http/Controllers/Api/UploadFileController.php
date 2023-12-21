<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadFileController extends Controller
{
    public function getArchives(Request $req) {

        return response()->json(['success' => $req->all()]);

    }
}
