<?php

use App\Http\Controllers\Api\UploadFileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/upload-files', [UploadFileController::class, 'getArchives']);