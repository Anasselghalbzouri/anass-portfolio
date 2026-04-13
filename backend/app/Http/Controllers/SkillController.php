<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\JsonResponse;

class SkillController extends Controller
{
    /**
     * Return all skills grouped by category.
     */
    public function index(): JsonResponse
    {
        $skills = Skill::orderBy('category')
                       ->orderByDesc('level')
                       ->get();

        return response()->json([
            'success' => true,
            'data'    => $skills,
        ]);
    }
}
