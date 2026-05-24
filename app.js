/* ============================================================
   Curriculum Data
   ============================================================ */
const CURRICULUM = [
  {
    id: 'level-1',
    level: 1,
    title: 'Beginner Foundations',
    description: 'Learn the interface, navigate the 3D viewport, and make your first sculpts.',
    modules: [
      {
        id: 'l1-interface',
        title: 'Interface & Navigation',
        topics: [
          {
            id: 'l1-if-1',
            title: 'Blender UI overview: areas, editors, and panels',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/interface/index.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-if-2',
            title: '3D Viewport navigation: orbit, pan, zoom, numpad shortcuts',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/editors/3dview/navigate/index.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-if-3',
            title: 'Object Mode vs Edit Mode vs Sculpt Mode',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/editors/3dview/modes.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      },
      {
        id: 'l1-sculptmode',
        title: 'First Steps in Sculpt Mode',
        topics: [
          {
            id: 'l1-sm-1',
            title: 'Entering Sculpt Mode and mesh resolution basics',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/index.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-sm-2',
            title: 'Brush radius (F), strength (Shift+F), and stylus pressure',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/brush/brush_settings.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-sm-3',
            title: 'Setting up X-axis symmetry for faces and organic forms',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/symmetry.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      },
      {
        id: 'l1-brushes',
        title: 'Essential Brushes',
        topics: [
          {
            id: 'l1-br-1',
            title: 'Draw and Draw Sharp: building and cutting form',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/draw.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-br-2',
            title: 'Clay and Clay Strips: blocking primary volumes',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/clay.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-br-3',
            title: 'Smooth (Shift): surface refinement and blending',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/smooth.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-br-4',
            title: 'Grab and Elastic Deform: posing and large-scale shaping',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/grab.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-br-5',
            title: 'Trim Boundary and Fill/Deepen: cutting silhouettes and filling dents',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tools/index.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      },
      {
        id: 'l1-primitives',
        title: 'Starting from Primitives',
        topics: [
          {
            id: 'l1-pr-1',
            title: 'UV Sphere vs Cube as sculpting bases — when to use each',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l1-pr-2',
            title: 'Basic organic blocking workflow: rough shape first, details last',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l1-pr-3',
            title: 'Undo/Redo, sculpt history, and saving incremental files',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/interface/undo_redo.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-pr-4',
            title: 'Setting up a critique scene: mirror plane, neutral grey background',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          }
        ]
      },
      {
        id: 'l1-matcap',
        title: 'Matcap & Viewport Display',
        topics: [
          {
            id: 'l1-mc-1',
            title: 'Matcap presets: choosing the right cap to reveal form and lighting',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/editors/3dview/display/shading.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-mc-2',
            title: 'X-ray mode, wireframe overlay, and face orientation for diagnosing meshes',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/editors/3dview/display/overlays.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      }
    ]
  },

  {
    id: 'level-2',
    level: 2,
    title: 'Core Techniques',
    description: 'Master Dyntopo, Multires, masking, and the principles of organic form.',
    modules: [
      {
        id: 'l2-dyntopo',
        title: 'Dynamic Topology (Dyntopo)',
        topics: [
          {
            id: 'l2-dy-1',
            title: 'What Dyntopo is and when to use it over Multires',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/dyntopo.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l2-dy-2',
            title: 'Detail size modes: Constant, Relative, and Manual',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/dyntopo.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l2-dy-3',
            title: 'Dyntopo limitations: artifacts, rendering, and performance',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l2-dy-4',
            title: 'Flood Fill and Collapse Short Edges for Dyntopo mesh cleanup',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/dyntopo.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      },
      {
        id: 'l2-multires',
        title: 'Multiresolution Sculpting',
        topics: [
          {
            id: 'l2-mr-1',
            title: 'Multiresolution modifier: setup and managing subdivision levels',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/multiresolution.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l2-mr-2',
            title: 'Working across levels: rough blocking → shapes → fine surface',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l2-mr-3',
            title: 'Applying, deleting, and baking Multires displacement data',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/multires.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      },
      {
        id: 'l2-masking',
        title: 'Masking & Face Sets',
        topics: [
          {
            id: 'l2-mk-1',
            title: 'Mask brush, Box Mask, and Lasso Mask for selective sculpting',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/mask.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l2-mk-2',
            title: 'Mask invert, blur, sharpen, and grow/shrink (Alt+A, Ctrl+I)',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/editing/mask.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l2-mk-3',
            title: 'Face Sets: painting, visibility toggle, and sculpt isolation',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/editing/face_sets.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l2-mk-4',
            title: 'Expand Mask by Topology (Shift+Alt+A) and Mask by Curvature',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/editing/mask.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      },
      {
        id: 'l2-forms',
        title: 'Organic Form Language',
        topics: [
          {
            id: 'l2-fo-1',
            title: 'Primary, secondary, and tertiary forms — the hierarchy of shape',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l2-fo-2',
            title: 'Silhouette design and directional flow lines',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l2-fo-3',
            title: 'Conveying volume, weight, and the effect of gravity',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          }
        ]
      },
      {
        id: 'l2-alphas',
        title: 'Brush Alphas & Stroke Methods',
        topics: [
          {
            id: 'l2-al-1',
            title: 'Brush textures and alphas: loading and using custom stamps',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/brush/texture.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l2-al-2',
            title: 'Stroke methods: Dots, Space, Drag Dot, Anchored, Line — when to use each',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/brush/stroke.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l2-al-3',
            title: 'Brush falloff curve: controlling hard vs soft edge behaviour',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/brush/falloff.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      }
    ]
  },

  {
    id: 'level-3',
    level: 3,
    title: 'Intermediate Sculpting',
    description: 'Tackle facial and body anatomy, cloth folds, and remeshing for production.',
    modules: [
      {
        id: 'l3-face',
        title: 'Facial Anatomy',
        topics: [
          {
            id: 'l3-fa-1',
            title: 'Skull landmarks and facial proportions — the rule of thirds',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l3-fa-2',
            title: 'Eye socket, brow ridge, and orbital anatomy',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l3-fa-3',
            title: 'Nose anatomy: bridge, tip, nostrils, and alar planes',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l3-fa-4',
            title: "Mouth and lips: Cupid's bow, philtrum, chin form",
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          }
        ]
      },
      {
        id: 'l3-body',
        title: 'Body Proportions',
        topics: [
          {
            id: 'l3-bo-1',
            title: '8-head proportion canon and key skeletal landmarks',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l3-bo-2',
            title: 'Major muscle groups for sculptors: an overview',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l3-bo-3',
            title: 'Torso: ribcage cage form, pelvis tilt, and lumbar curvature',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          }
        ]
      },
      {
        id: 'l3-neck',
        title: 'Neck, Shoulders & Ear',
        topics: [
          {
            id: 'l3-ne-1',
            title: 'Neck anatomy: sternocleidomastoid, trapezius, and the cylinder-in-cylinder model',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l3-ne-2',
            title: 'Shoulder girdle: clavicle, deltoid, and the connection to chest and back',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l3-ne-3',
            title: 'Ear anatomy study: helix, antihelix, tragus, antitragus, and concha',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          }
        ]
      },
      {
        id: 'l3-cloth',
        title: 'Cloth & Fabric',
        topics: [
          {
            id: 'l3-cl-1',
            title: 'Fold types: falling, pulling, compressed, and draped',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l3-cl-2',
            title: 'Sculpting cloth using Crease, Smooth, Flatten, and Cloth brush',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/cloth.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l3-cl-3',
            title: 'Using cloth physics simulation as a sculpting base mesh',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/physics/cloth/introduction.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l3-cl-4',
            title: 'Costume accessories: integrating hard buckles and pouches with soft fabric',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          }
        ]
      },
      {
        id: 'l3-retopo',
        title: 'Remeshing & Retopology',
        topics: [
          {
            id: 'l3-re-1',
            title: 'Voxel Remesh: choosing the right voxel size for your sculpt',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/remesh.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l3-re-2',
            title: 'QuadriFlow Remesh for production-friendly quad topology',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/remesh.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l3-re-3',
            title: 'Manual retopology: PolyBuild tool and RetopoFlow addon overview',
            resourceUrl: 'https://www.youtube.com/@blenderguru',
            resourceLabel: 'Blender Guru'
          },
          {
            id: 'l3-re-4',
            title: 'UV seam placement strategy to avoid normal map baking artifacts',
            resourceUrl: 'https://www.youtube.com/@blenderguru',
            resourceLabel: 'Blender Guru'
          }
        ]
      }
    ]
  },

  {
    id: 'level-4',
    level: 4,
    title: 'Advanced Sculpting',
    description: 'Build full characters, sculpt complex anatomy, and integrate with the rendering pipeline.',
    modules: [
      {
        id: 'l4-pipeline',
        title: 'Full Character Pipeline',
        topics: [
          {
            id: 'l4-pi-1',
            title: 'Setting up image plane references in the 3D Viewport',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/editors/3dview/navigate/align.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l4-pi-2',
            title: 'Iterative workflow: block-in → silhouette → planes → detail',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l4-pi-3',
            title: 'Planning pose and expression before committing to final detail',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l4-pi-4',
            title: 'Pose brush: live posing without destroying sculpted surface detail',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/pose.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      },
      {
        id: 'l4-extremities',
        title: 'Hands & Feet',
        topics: [
          {
            id: 'l4-ex-1',
            title: 'Hand anatomy: metacarpals, tendons, and dorsal surface form',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l4-ex-2',
            title: 'Sculpting fingers: knuckle pads, interphalangeal creases, nails',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l4-ex-3',
            title: 'Foot forms: plantar arch, heel, toe pads, and Achilles tendon',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          }
        ]
      },
      {
        id: 'l4-creature',
        title: 'Creature & Character Design',
        topics: [
          {
            id: 'l4-cr-1',
            title: 'Silhouette-first design: readability at thumbnail size',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l4-cr-2',
            title: 'Exaggeration and push-and-pull stylization techniques',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l4-cr-3',
            title: 'Working from concept art: translating 2D to 3D accurately',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          }
        ]
      },
      {
        id: 'l4-baking',
        title: 'Texture & Normal Baking',
        topics: [
          {
            id: 'l4-ba-1',
            title: 'High-poly → low-poly baking setup in Blender Cycles',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/render/cycles/baking.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l4-ba-2',
            title: 'Normal map baking: cage setup, troubleshooting seams',
            resourceUrl: 'https://www.youtube.com/@blenderguru',
            resourceLabel: 'Blender Guru'
          },
          {
            id: 'l4-ba-3',
            title: 'Ambient occlusion, curvature, and thickness map baking',
            resourceUrl: 'https://www.youtube.com/@blenderguru',
            resourceLabel: 'Blender Guru'
          },
          {
            id: 'l4-ba-4',
            title: 'Exporting to Substance Painter: mesh naming, ID maps, and bake sets',
            resourceUrl: 'https://www.youtube.com/@blenderguru',
            resourceLabel: 'Blender Guru'
          }
        ]
      },
      {
        id: 'l4-hair',
        title: 'Hair Sculpting',
        topics: [
          {
            id: 'l4-ha-1',
            title: 'Hair mass blocking: volume, flow direction, and defining parting lines',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l4-ha-2',
            title: 'Strand-level detail using Crease, Draw Sharp, and custom hair alphas',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l4-ha-3',
            title: 'Hairline edges: short hair, stubble, and peach fuzz transitions',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          }
        ]
      }
    ]
  },

  {
    id: 'level-5',
    level: 5,
    title: 'Expert / Production',
    description: 'Master production-ready pipelines, develop your visual style, and build a portfolio.',
    modules: [
      {
        id: 'l5-workflows',
        title: 'Production Workflows',
        topics: [
          {
            id: 'l5-wf-1',
            title: 'Full pipeline: concept → sculpt → retopo → rig → render',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l5-wf-2',
            title: 'Non-destructive sculpting using Shape Keys for blend shapes',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/animation/shape_keys/index.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l5-wf-3',
            title: 'File naming conventions, versioning, and project organisation',
            resourceUrl: 'https://www.youtube.com/@blenderguru',
            resourceLabel: 'Blender Guru'
          }
        ]
      },
      {
        id: 'l5-style',
        title: 'Stylized vs Realistic',
        topics: [
          {
            id: 'l5-st-1',
            title: 'Stylized approach: planar forms, pushed proportions, toon rendering',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l5-st-2',
            title: 'Realistic approach: skin pores, asymmetry, subsurface scattering',
            resourceUrl: 'https://www.youtube.com/@ZachariasReinhardt',
            resourceLabel: 'Zacharias Reinhardt'
          },
          {
            id: 'l5-st-3',
            title: 'Finding and deliberately developing your personal visual style',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          }
        ]
      },
      {
        id: 'l5-environment',
        title: 'Environment Sculpting',
        topics: [
          {
            id: 'l5-en-1',
            title: 'Large-scale terrain and landscape sculpting with Voxel Remesh',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/index.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l5-en-2',
            title: 'Rock and stone forms: using geology as structural reference',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l5-en-3',
            title: 'Hybrid organic + hard-surface environment sculpting',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          }
        ]
      },
      {
        id: 'l5-printing',
        title: 'Sculpting for 3D Printing',
        topics: [
          {
            id: 'l5-pt-1',
            title: 'Wall thickness, hollow vs solid, and material requirements for FDM and resin',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/addons/mesh/3d_print_toolbox/index.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l5-pt-2',
            title: 'Support-aware design: overhangs, angles, and support-free geometry strategies',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l5-pt-3',
            title: 'Mesh repair: non-manifold edges and flipped normals with the 3D Print Toolbox',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/addons/mesh/3d_print_toolbox/index.html',
            resourceLabel: 'Blender Docs'
          }
        ]
      },
      {
        id: 'l5-crosssoft',
        title: 'Cross-Software Pipelines',
        topics: [
          {
            id: 'l5-cs-1',
            title: 'ZBrush → Blender roundtrip via GoZ and FBX: preserving SubD levels',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          },
          {
            id: 'l5-cs-2',
            title: 'Blender → Substance Painter: mesh naming conventions and ID colour maps',
            resourceUrl: 'https://www.youtube.com/@blenderguru',
            resourceLabel: 'Blender Guru'
          },
          {
            id: 'l5-cs-3',
            title: 'Game-ready pipeline: polycount budgets, LOD meshes, and Nanite considerations',
            resourceUrl: 'https://www.youtube.com/@PonteRyuurui',
            resourceLabel: 'Ponte Ryuurui'
          }
        ]
      },
      {
        id: 'l5-portfolio',
        title: 'Portfolio Development',
        topics: [
          {
            id: 'l5-po-1',
            title: 'Turntable renders, hero shot composition, and lighting setups',
            resourceUrl: 'https://www.youtube.com/@blenderguru',
            resourceLabel: 'Blender Guru'
          },
          {
            id: 'l5-po-2',
            title: 'Presenting work on ArtStation, social media, and demo reels',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          },
          {
            id: 'l5-po-3',
            title: 'Scoping personal projects for completion: done beats perfect',
            resourceUrl: 'https://www.youtube.com/@YanSculpts',
            resourceLabel: 'YanSculpts'
          }
        ]
      }
    ]
  }
];

/* ============================================================
   Challenges Data
   ============================================================ */
const CHALLENGES = [
  {
    id: 'ch-1',
    title: 'Perfect Smooth Sphere',
    difficulty: 'beginner',
    description: 'Start from a UV Sphere and use only the Smooth brush to achieve a perfectly uniform, artifact-free surface. Patience and control over the brush are everything.'
  },
  {
    id: 'ch-2',
    title: 'Symmetrical Face Blockout',
    difficulty: 'beginner',
    description: 'Sculpt a basic face showing clear eye sockets, nose bridge, and mouth area using X symmetry. No surface detail — just accurate proportional placement of the five major features.'
  },
  {
    id: 'ch-3',
    title: 'Rock Formation Study',
    difficulty: 'beginner',
    description: 'Sculpt three different rock types (angular, smooth water-worn, and fractured cliff face) in one scene. Use photo reference and study how geology dictates surface form.'
  },
  {
    id: 'ch-11',
    title: 'Speed Sculpt — 30 Minutes',
    difficulty: 'beginner',
    description: 'Set a timer and sculpt anything you like in exactly 30 minutes. The goal is decisiveness — commit to forms, do not second-guess, and keep moving. Repeat weekly to track growth.'
  },
  {
    id: 'ch-4',
    title: 'Stylized Cartoon Head',
    difficulty: 'intermediate',
    description: 'Create an expressive cartoon character head with a distinct personality. Push proportions beyond realism, simplify every form intentionally, and make the silhouette instantly readable.'
  },
  {
    id: 'ch-5',
    title: 'Realistic Human Ear',
    difficulty: 'intermediate',
    description: 'Sculpt a standalone anatomically accurate ear. Include the helix, antihelix, tragus, antitragus, and concha bowl. Use multiple photo references and check from all angles.'
  },
  {
    id: 'ch-6',
    title: 'Human Hand',
    difficulty: 'intermediate',
    description: 'Sculpt a complete human hand with all five fingers — showing visible knuckle pads, interphalangeal creases, fingernails, and the thenar and hypothenar eminences.'
  },
  {
    id: 'ch-12',
    title: 'Drape Study',
    difficulty: 'intermediate',
    description: 'Sculpt cloth draped over a simple mannequin form — no figure underneath. Focus entirely on fold types: falling, compressed, and pulled. Use real fabric reference.'
  },
  {
    id: 'ch-13',
    title: 'Animal Head',
    difficulty: 'intermediate',
    description: 'Choose any real animal and sculpt its head from reference. Tests whether anatomy principles transfer from human to non-human forms. Check proportions from multiple angles.'
  },
  {
    id: 'ch-7',
    title: 'Original Creature Bust',
    difficulty: 'advanced',
    description: 'Design and sculpt an entirely original creature bust from imagination — no external concept allowed. The design must have a clear readable silhouette and an internally consistent anatomy logic.'
  },
  {
    id: 'ch-8',
    title: 'Realistic Portrait',
    difficulty: 'advanced',
    description: 'Sculpt a realistic portrait of a real or well-known fictional person. Capture accurate facial proportions, natural asymmetry, and believable skin surface quality with pore-level microdetail.'
  },
  {
    id: 'ch-9',
    title: 'Hard-Surface Armor Piece',
    difficulty: 'advanced',
    description: 'Sculpt a sci-fi pauldron or chest plate that blends organic curves with crisp hard-surface panel lines. Use masking, Flatten, and Trim brushes to achieve sharp manufactured edges.'
  },
  {
    id: 'ch-14',
    title: 'Copy a Master',
    difficulty: 'advanced',
    description: 'Recreate a famous sculpture (Bernini, Rodin, Michelangelo, etc.) from photo reference. Pure observational exercise — measure proportions carefully and match surface quality as closely as possible.'
  },
  {
    id: 'ch-15',
    title: 'Stylized Full Figure',
    difficulty: 'advanced',
    description: 'Sculpt a complete stylized character from head to toe, including simple clothing or costume. Requires consistent proportions, readable silhouette, and cohesive design language throughout.'
  },
  {
    id: 'ch-10',
    title: 'Complete Character Bust',
    difficulty: 'expert',
    description: 'Sculpt a full character from head to mid-torso with a clear expression, deliberate costume or skin texture, and professional surface quality. Finish with a hero-shot turntable render.'
  },
  {
    id: 'ch-16',
    title: 'Print-Ready Miniature',
    difficulty: 'expert',
    description: 'Sculpt a character or creature intended for FDM or resin printing. Must pass the 3D Print Toolbox checks (wall thickness, manifold geometry, no inverted normals) and be scaled correctly.'
  },
  {
    id: 'ch-17',
    title: 'Prop / Weapon',
    difficulty: 'expert',
    description: 'Sculpt a detailed weapon or prop that combines an organic element (leather grip, bone handle) with hard-surface metal parts. Show material contrast through surface texture variation.'
  }
];

/* ============================================================
   Storage
   ============================================================ */
const STORAGE_KEY  = 'blender_sculpt_v1';
const THEME_KEY    = 'blender_sculpt_theme';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { topics: new Set(), challenges: new Set(), notes: {}, bookmark: null };
    const p = JSON.parse(raw);
    return {
      topics:     new Set(p.topics     || []),
      challenges: new Set(p.challenges || []),
      notes:      p.notes    || {},
      bookmark:   p.bookmark || null
    };
  } catch {
    return { topics: new Set(), challenges: new Set(), notes: {}, bookmark: null };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    topics:     [...progress.topics],
    challenges: [...progress.challenges],
    notes:      progress.notes,
    bookmark:   progress.bookmark
  }));
}

let progress = loadProgress();

/* ============================================================
   Theme
   ============================================================ */
function loadTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = document.getElementById('theme-btn');
  if (!btn) return;
  btn.textContent = theme === 'dark' ? '☀' : '☾';
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

/* ============================================================
   Helpers
   ============================================================ */
function allTopics() {
  return CURRICULUM.flatMap(lvl => lvl.modules.flatMap(mod => mod.topics));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ============================================================
   Progress Bars
   ============================================================ */
function updateProgressBars() {
  const topics      = allTopics();
  const totalTopics = topics.length;
  const doneTopics  = topics.filter(t => progress.topics.has(t.id)).length;
  const topicPct    = totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;

  const totalChallenges = CHALLENGES.length;
  const doneChallenges  = CHALLENGES.filter(c => progress.challenges.has(c.id)).length;
  const challengePct    = totalChallenges > 0 ? Math.round((doneChallenges / totalChallenges) * 100) : 0;

  const learningBar     = document.getElementById('learning-bar');
  const challengesBar   = document.getElementById('challenges-bar');

  learningBar.style.width   = topicPct + '%';
  challengesBar.style.width = challengePct + '%';

  document.getElementById('learning-pct').textContent     = topicPct + '%';
  document.getElementById('challenges-pct').textContent   = challengePct + '%';
  document.getElementById('learning-count').textContent   = `${doneTopics} / ${totalTopics} topics`;
  document.getElementById('challenges-count').textContent = `${doneChallenges} / ${totalChallenges} completed`;

  learningBar.closest('.progress-track').setAttribute('aria-valuenow', topicPct);
  challengesBar.closest('.progress-track').setAttribute('aria-valuenow', challengePct);
}

/* ============================================================
   Curriculum Rendering
   ============================================================ */
function renderTopic(topic) {
  const done        = progress.topics.has(topic.id);
  const isBookmark  = progress.bookmark === topic.id;

  const li = document.createElement('li');
  li.className = 'topic-row' + (done ? ' done' : '');

  li.innerHTML = `
    <label class="topic-label">
      <input type="checkbox" class="topic-checkbox" data-id="${topic.id}"${done ? ' checked' : ''}>
      <span class="checkmark" aria-hidden="true"></span>
      <span class="topic-title">${topic.title}</span>
    </label>
    <div class="topic-actions">
      <button class="bookmark-btn${isBookmark ? ' active' : ''}" data-topic-id="${topic.id}"
              title="${isBookmark ? 'Clear focus' : 'Set as current focus'}" aria-label="Bookmark this topic">
        ${isBookmark ? '★' : '☆'}
      </button>
      <a class="resource-link" href="${topic.resourceUrl}" target="_blank" rel="noopener noreferrer"
         title="Open: ${topic.resourceLabel}">${topic.resourceLabel}&nbsp;→</a>
    </div>
  `;

  li.querySelector('.topic-checkbox').addEventListener('change', e => {
    if (e.target.checked) progress.topics.add(topic.id);
    else                   progress.topics.delete(topic.id);
    saveProgress();
    li.classList.toggle('done', e.target.checked);
    updateProgressBars();
    refreshLevelHeader(topic._levelId);
  });

  li.querySelector('.bookmark-btn').addEventListener('click', () => {
    setBookmark(topic.id);
  });

  return li;
}

function renderModule(mod, levelId) {
  const div = document.createElement('div');
  div.className = 'module-card';

  const h3 = document.createElement('h3');
  h3.className = 'module-title';
  h3.textContent = mod.title;
  div.appendChild(h3);

  const ul = document.createElement('ul');
  ul.className = 'topic-list';
  mod.topics.forEach(topic => {
    topic._levelId = levelId;
    ul.appendChild(renderTopic(topic));
  });
  div.appendChild(ul);
  return div;
}

function buildLevelDoneCount(level) {
  const topics = level.modules.flatMap(m => m.topics);
  const total  = topics.length;
  const done   = topics.filter(t => progress.topics.has(t.id)).length;
  return { done, total };
}

function refreshLevelHeader(levelId) {
  const level = CURRICULUM.find(l => l.id === levelId);
  if (!level) return;

  const block    = document.querySelector(`.level-block[data-level-id="${levelId}"]`);
  if (!block) return;
  const countEl  = block.querySelector('.level-progress-text');
  const badgeEl  = block.querySelector('.level-complete-badge');
  const miniBar  = block.querySelector('.level-mini-fill');
  const { done, total } = buildLevelDoneCount(level);
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  countEl.textContent = `${done} / ${total}`;
  if (miniBar) miniBar.style.width = pct + '%';

  if (done === total && total > 0) {
    block.classList.add('level-done');
    if (!badgeEl) {
      const badge = document.createElement('span');
      badge.className = 'level-complete-badge';
      badge.textContent = '✓ Complete';
      countEl.insertAdjacentElement('afterend', badge);
    }
  } else {
    block.classList.remove('level-done');
    if (badgeEl) badgeEl.remove();
  }
}

function renderCurriculum() {
  const container = document.getElementById('levels-container');
  container.innerHTML = '';

  CURRICULUM.forEach((level, idx) => {
    const { done, total } = buildLevelDoneCount(level);
    const isComplete = done === total && total > 0;
    const expanded   = idx === 0;
    const pct        = total > 0 ? Math.round((done / total) * 100) : 0;

    const block = document.createElement('div');
    block.className      = 'level-block' + (isComplete ? ' level-done' : '');
    block.dataset.level   = level.level;
    block.dataset.levelId = level.id;

    block.innerHTML = `
      <button class="level-header" aria-expanded="${expanded}" data-level-id="${level.id}">
        <div class="level-header-left">
          <span class="level-badge">Level ${level.level}</span>
          <div class="level-title-group">
            <span class="level-title">${level.title}</span>
            <span class="level-desc">${level.description}</span>
          </div>
        </div>
        <div class="level-header-right">
          <div class="level-mini-bar" title="${pct}% complete">
            <div class="level-mini-fill" style="width:${pct}%"></div>
          </div>
          <span class="level-progress-text">${done} / ${total}</span>
          ${isComplete ? '<span class="level-complete-badge">✓ Complete</span>' : ''}
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </button>
      <div class="level-content${expanded ? '' : ' collapsed'}" id="content-${level.id}"></div>
    `;

    const contentEl = block.querySelector('.level-content');
    level.modules.forEach(mod => contentEl.appendChild(renderModule(mod, level.id)));

    block.querySelector('.level-header').addEventListener('click', () => {
      const btn    = block.querySelector('.level-header');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      contentEl.classList.toggle('collapsed', isOpen);
      updateExpandAllBtn();
    });

    container.appendChild(block);
  });
}

/* ============================================================
   Challenges Rendering
   ============================================================ */
function buildChallengeCard(challenge) {
  const done  = progress.challenges.has(challenge.id);
  const notes = escapeHtml(progress.notes[challenge.id] || '');

  const card = document.createElement('div');
  card.className        = 'challenge-card' + (done ? ' done' : '');
  card.dataset.difficulty = challenge.difficulty;

  card.innerHTML = `
    <div class="challenge-stripe" aria-hidden="true"></div>
    <div class="challenge-body">
      <div class="challenge-header">
        <span class="difficulty-badge">${capitalize(challenge.difficulty)}</span>
        ${done ? '<span class="done-badge">✓ Complete</span>' : ''}
      </div>
      <h3 class="challenge-title">${challenge.title}</h3>
      <p class="challenge-desc">${challenge.description}</p>
      <textarea class="challenge-notes" placeholder="Notes, WIP link, completion date…" rows="2">${notes}</textarea>
      <button class="challenge-toggle" data-id="${challenge.id}">
        ${done ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  `;

  card.querySelector('.challenge-notes').addEventListener('input', e => {
    progress.notes[challenge.id] = e.target.value;
    saveProgress();
  });

  card.querySelector('.challenge-toggle').addEventListener('click', () => {
    if (progress.challenges.has(challenge.id)) progress.challenges.delete(challenge.id);
    else                                        progress.challenges.add(challenge.id);
    saveProgress();
    const updated = buildChallengeCard(challenge);
    card.replaceWith(updated);
    updateProgressBars();
  });

  return card;
}

function renderChallenges() {
  const container = document.getElementById('challenges-container');
  container.innerHTML = '';
  CHALLENGES.forEach(c => container.appendChild(buildChallengeCard(c)));
  applyDifficultyFilter();
}

/* ============================================================
   Feature: Expand / Collapse All
   ============================================================ */
function updateExpandAllBtn() {
  const btn      = document.getElementById('expand-all-btn');
  if (!btn) return;
  const headers  = document.querySelectorAll('.level-header');
  const anyOpen  = [...headers].some(h => h.getAttribute('aria-expanded') === 'true');
  btn.textContent = anyOpen ? 'Collapse All' : 'Expand All';
}

function initExpandAll() {
  const btn = document.getElementById('expand-all-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const headers     = document.querySelectorAll('.level-header');
    const anyCollapsed = [...headers].some(h => h.getAttribute('aria-expanded') === 'false');
    headers.forEach(h => {
      h.setAttribute('aria-expanded', anyCollapsed ? 'true' : 'false');
      const content = document.getElementById(`content-${h.dataset.levelId}`);
      if (content) content.classList.toggle('collapsed', !anyCollapsed);
    });
    btn.textContent = anyCollapsed ? 'Collapse All' : 'Expand All';
  });
  updateExpandAllBtn();
}

/* ============================================================
   Feature: Difficulty Filter
   ============================================================ */
let activeFilters = new Set(['beginner', 'intermediate', 'advanced', 'expert']);

function applyDifficultyFilter() {
  document.querySelectorAll('.challenge-card').forEach(card => {
    card.hidden = !activeFilters.has(card.dataset.difficulty);
  });
}

function initDifficultyFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      if (activeFilters.has(f)) {
        if (activeFilters.size === 1) return;
        activeFilters.delete(f);
        btn.classList.remove('active');
      } else {
        activeFilters.add(f);
        btn.classList.add('active');
      }
      applyDifficultyFilter();
    });
  });
}

/* ============================================================
   Feature: Bookmark / Current Focus
   ============================================================ */
function updateFocusChip() {
  const chip     = document.getElementById('focus-chip');
  const chipText = document.getElementById('focus-chip-text');

  if (!progress.bookmark) {
    chip.hidden = true;
    return;
  }
  const topic = allTopics().find(t => t.id === progress.bookmark);
  if (!topic) {
    progress.bookmark = null;
    saveProgress();
    chip.hidden = true;
    return;
  }
  chipText.textContent = topic.title;
  chip.hidden = false;

  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    const active = btn.dataset.topicId === progress.bookmark;
    btn.classList.toggle('active', active);
    btn.textContent = active ? '★' : '☆';
    btn.title = active ? 'Clear focus' : 'Set as current focus';
  });
}

function setBookmark(topicId) {
  progress.bookmark = progress.bookmark === topicId ? null : topicId;
  saveProgress();
  updateFocusChip();
}

/* ============================================================
   Feature: Export / Import
   ============================================================ */
function exportProgress() {
  const data = JSON.stringify({
    topics:     [...progress.topics],
    challenges: [...progress.challenges],
    notes:      progress.notes,
    bookmark:   progress.bookmark
  }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'blender-sculpt-progress.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      progress = {
        topics:     new Set(data.topics     || []),
        challenges: new Set(data.challenges || []),
        notes:      data.notes    || {},
        bookmark:   data.bookmark || null
      };
      saveProgress();
      renderCurriculum();
      renderChallenges();
      updateProgressBars();
      updateFocusChip();
      initExpandAll();
    } catch {
      alert('Import failed: invalid file format.');
    }
  };
  reader.readAsText(file);
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(loadTheme());

  renderCurriculum();
  renderChallenges();
  updateProgressBars();
  updateFocusChip();

  initExpandAll();
  initDifficultyFilter();

  document.getElementById('theme-btn').addEventListener('click', toggleTheme);

  document.getElementById('focus-chip-clear').addEventListener('click', () => {
    progress.bookmark = null;
    saveProgress();
    updateFocusChip();
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.textContent = '☆';
      btn.title = 'Set as current focus';
    });
  });

  document.getElementById('export-btn').addEventListener('click', exportProgress);

  document.getElementById('import-input').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) importProgress(file);
    e.target.value = '';
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    progress = { topics: new Set(), challenges: new Set(), notes: {}, bookmark: null };
    saveProgress();
    renderCurriculum();
    renderChallenges();
    updateProgressBars();
    updateFocusChip();
    initExpandAll();
  });
});
