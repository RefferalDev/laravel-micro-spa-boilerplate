<?php
use Illuminate\Support\Facades\{Route, Auth};

//// Authentication Routes...
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('register', 'Auth\RegisterController@register');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
Route::view('auth/reset', 'app-spa')->name('password.reset');

Route::view('{slug?}', 'app-spa')
    ->where('slug', '^(?!api).*?$')
    ->name('spa');
