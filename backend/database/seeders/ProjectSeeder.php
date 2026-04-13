<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title'       => 'Watch Store — E-commerce',
                'description' => 'Complete e-commerce application with dynamic cart, product filtering, and global state management via Redux Toolkit. Integrated REST API for product data retrieval and display.',
                'github_url'  => 'https://github.com/Anasselghalbzouri',
                'demo_url'    => null,
                'tech_stack'  => ['React', 'Redux Toolkit', 'Axios', 'JavaScript', 'Bootstrap'],
                'category'    => 'E-commerce',
                'type'        => 'frontend',
                'year'        => 2026,
            ],
            [
                'title'       => 'Client Management System',
                'description' => 'Full CRUD Laravel application with authentication, database migrations, seeders, and a responsive interface built with Blade templates and Bootstrap.',
                'github_url'  => 'https://github.com/Anasselghalbzouri',
                'demo_url'    => null,
                'tech_stack'  => ['Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'Blade', 'Bootstrap'],
                'category'    => 'Management',
                'type'        => 'backend',
                'year'        => 2025,
            ],
            [
                'title'       => 'Weather Application',
                'description' => 'Real-time weather app with OpenWeather API integration and city-based search. Clean UI with dynamic weather icons and temperature display.',
                'github_url'  => 'https://github.com/Anasselghalbzouri',
                'demo_url'    => null,
                'tech_stack'  => ['React', 'Axios', 'OpenWeather API', 'JavaScript', 'CSS3'],
                'category'    => 'API',
                'type'        => 'frontend',
                'year'        => 2025,
            ],
            [
                'title'       => 'Car & Student Manager',
                'description' => 'Two full MVC applications with complete CRUD operations. Database relationship management with Eloquent ORM following Laravel best practices.',
                'github_url'  => 'https://github.com/Anasselghalbzouri',
                'demo_url'    => null,
                'tech_stack'  => ['Laravel', 'PHP', 'MySQL', 'Eloquent', 'MVC', 'Git'],
                'category'    => 'Management',
                'type'        => 'backend',
                'year'        => 2025,
            ],
        ];

        foreach ($projects as $data) {
            Project::create($data);
        }
    }
}
