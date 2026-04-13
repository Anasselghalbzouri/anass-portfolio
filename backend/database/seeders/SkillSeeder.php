<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [
            // Frontend
            ['name' => 'React',           'category' => 'Frontend',      'level' => 85, 'icon' => '⚛️'],
            ['name' => 'JavaScript ES6+', 'category' => 'Frontend',      'level' => 82, 'icon' => '🟨'],
            ['name' => 'Tailwind CSS',    'category' => 'Frontend',      'level' => 88, 'icon' => '🎨'],
            ['name' => 'HTML5 / CSS3',    'category' => 'Frontend',      'level' => 92, 'icon' => '🌐'],
            ['name' => 'Redux Toolkit',   'category' => 'Frontend',      'level' => 75, 'icon' => '🔄'],
            ['name' => 'Bootstrap',       'category' => 'Frontend',      'level' => 86, 'icon' => '💠'],

            // Backend
            ['name' => 'Laravel',         'category' => 'Backend',       'level' => 80, 'icon' => '🔴'],
            ['name' => 'PHP',             'category' => 'Backend',       'level' => 78, 'icon' => '🐘'],
            ['name' => 'MySQL',           'category' => 'Backend',       'level' => 76, 'icon' => '🗄️'],
            ['name' => 'REST API',        'category' => 'Backend',       'level' => 82, 'icon' => '🔗'],
            ['name' => 'Eloquent ORM',    'category' => 'Backend',       'level' => 77, 'icon' => '🧩'],

            // Tools
            ['name' => 'Git / GitHub',    'category' => 'Tools & Methods', 'level' => 85, 'icon' => '🐙'],
            ['name' => 'VS Code',         'category' => 'Tools & Methods', 'level' => 90, 'icon' => '💻'],
            ['name' => 'npm / Composer',  'category' => 'Tools & Methods', 'level' => 82, 'icon' => '📦'],
            ['name' => 'Scrum / Agile',   'category' => 'Tools & Methods', 'level' => 72, 'icon' => '🔁'],

            // Soft Skills
            ['name' => 'Problem Solving', 'category' => 'Soft Skills',   'level' => 88, 'icon' => '🧠'],
            ['name' => 'Teamwork',        'category' => 'Soft Skills',   'level' => 90, 'icon' => '🤝'],
            ['name' => 'Adaptability',    'category' => 'Soft Skills',   'level' => 87, 'icon' => '🌱'],
            ['name' => 'Autonomy',        'category' => 'Soft Skills',   'level' => 85, 'icon' => '🚀'],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
