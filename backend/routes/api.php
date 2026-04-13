<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::get('/projects',       [ProjectController::class, 'index']);
Route::get('/projects/{project}', [ProjectController::class, 'show']);

Route::get('/skills',         [SkillController::class, 'index']);


// FIX [BUG #3]: rate-limit contact submissions to 10 requests per minute per IP to prevent abuse
Route::post('/contact',       [ContactController::class, 'store'])->middleware('throttle:10,1');
