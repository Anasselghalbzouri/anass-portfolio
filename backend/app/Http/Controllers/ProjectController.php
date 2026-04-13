<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    /**
     * Return all projects, newest first.
     */
    public function index(): JsonResponse
    {
        $projects = Project::orderByDesc('year')
                           ->orderByDesc('created_at')
                           ->get();

        return response()->json([
            'success' => true,
            'data'    => $projects,
        ]);
    }

    /**
     * Return a single project by ID.
     */
    public function show(Project $project): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data'    => $project,
        ]);
    }
}
