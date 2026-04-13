<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image_url',
        'github_url',
        'demo_url',
        'tech_stack',
        'category',
        'type',
        'year',
    ];

    protected $casts = [
        'tech_stack' => 'array',
        'year'       => 'integer',
    ];
}
