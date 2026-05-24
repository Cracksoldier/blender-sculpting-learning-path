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
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/introduction.html',
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
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/symmetry.html',
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
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tools/draw.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-br-2',
            title: 'Clay and Clay Strips: blocking primary volumes',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tools/clay.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-br-3',
            title: 'Smooth (Shift): surface refinement and blending',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tools/smooth.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l1-br-4',
            title: 'Grab and Elastic Deform: posing and large-scale shaping',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tools/grab.html',
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
            resourceUrl: 'https://docs.blender.org/manual/en/latest/advanced/undo_redo.html',
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
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tool_settings/multiresolution.html',
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
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tools/mask.html',
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
            title: 'Mouth and lips: Cupid\'s bow, philtrum, chin form',
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
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/tools/cloth.html',
            resourceLabel: 'Blender Docs'
          },
          {
            id: 'l3-cl-3',
            title: 'Using cloth physics simulation as a sculpting base mesh',
            resourceUrl: 'https://docs.blender.org/manual/en/latest/physics/cloth/introduction.html',
            resourceLabel: 'Blender Docs'
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
            resourceUrl: 'https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/introduction.html',
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
    id: 'ch-10',
    title: 'Complete Character Bust',
    difficulty: 'expert',
    description: 'Sculpt a full character from head to mid-torso with a clear expression, deliberate costume or skin texture, and professional surface quality. Finish with a hero-shot turntable render.'
  }
];

/* ============================================================
   Storage
   ============================================================ */
const STORAGE_KEY = 'blender_sculpt_v1';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { topics: new Set(), challenges: new Set() };
    const parsed = JSON.parse(raw);
    return {
      topics:     new Set(parsed.topics     || []),
      challenges: new Set(parsed.challenges || [])
    };
  } catch {
    return { topics: new Set(), challenges: new Set() };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    topics:     [...progress.topics],
    challenges: [...progress.challenges]
  }));
}

let progress = loadProgress();

/* ============================================================
   Helpers
   ============================================================ */
function allTopics() {
  return CURRICULUM.flatMap(lvl => lvl.modules.flatMap(mod => mod.topics));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ============================================================
   Progress Bars
   ============================================================ */
function updateProgressBars() {
  const topics       = allTopics();
  const totalTopics  = topics.length;
  const doneTopics   = topics.filter(t => progress.topics.has(t.id)).length;
  const topicPct     = totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;

  const totalChallenges = CHALLENGES.length;
  const doneChallenges  = CHALLENGES.filter(c => progress.challenges.has(c.id)).length;
  const challengePct    = totalChallenges > 0 ? Math.round((doneChallenges / totalChallenges) * 100) : 0;

  const learningBar   = document.getElementById('learning-bar');
  const challengesBar = document.getElementById('challenges-bar');
  const learningTrack   = learningBar.closest('.progress-track');
  const challengesTrack = challengesBar.closest('.progress-track');

  learningBar.style.width  = topicPct + '%';
  challengesBar.style.width = challengePct + '%';

  document.getElementById('learning-pct').textContent   = topicPct + '%';
  document.getElementById('challenges-pct').textContent = challengePct + '%';
  document.getElementById('learning-count').textContent   = `${doneTopics} / ${totalTopics} topics`;
  document.getElementById('challenges-count').textContent = `${doneChallenges} / ${totalChallenges} completed`;

  learningTrack.setAttribute('aria-valuenow', topicPct);
  challengesTrack.setAttribute('aria-valuenow', challengePct);
}

/* ============================================================
   Render Curriculum
   ============================================================ */
function renderTopic(topic) {
  const done = progress.topics.has(topic.id);
  const li = document.createElement('li');
  li.className = 'topic-row' + (done ? ' done' : '');

  li.innerHTML = `
    <label class="topic-label">
      <input type="checkbox" class="topic-checkbox" data-id="${topic.id}"${done ? ' checked' : ''}>
      <span class="checkmark" aria-hidden="true"></span>
      <span class="topic-title">${topic.title}</span>
    </label>
    <a class="resource-link" href="${topic.resourceUrl}" target="_blank" rel="noopener noreferrer"
       title="Open: ${topic.resourceLabel}">${topic.resourceLabel}&nbsp;→</a>
  `;

  li.querySelector('.topic-checkbox').addEventListener('change', e => {
    const id = e.target.dataset.id;
    if (e.target.checked) progress.topics.add(id);
    else                   progress.topics.delete(id);
    saveProgress();
    li.classList.toggle('done', e.target.checked);
    updateProgressBars();
    refreshLevelHeader(topic._levelId);
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
  const topics  = level.modules.flatMap(m => m.topics);
  const total   = topics.length;
  const done    = topics.filter(t => progress.topics.has(t.id)).length;
  return { done, total };
}

function refreshLevelHeader(levelId) {
  const level = CURRICULUM.find(l => l.id === levelId);
  if (!level) return;

  const block      = document.querySelector(`.level-block[data-level-id="${levelId}"]`);
  const countEl    = block.querySelector('.level-progress-text');
  const badgeEl    = block.querySelector('.level-complete-badge');
  const { done, total } = buildLevelDoneCount(level);

  countEl.textContent = `${done} / ${total}`;

  if (done === total) {
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
    const isComplete      = done === total && total > 0;
    // Level 1 open by default, rest collapsed
    const expanded        = idx === 0;

    const block = document.createElement('div');
    block.className = 'level-block' + (isComplete ? ' level-done' : '');
    block.dataset.level    = level.level;
    block.dataset.levelId  = level.id;

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

    // Collapse toggle
    block.querySelector('.level-header').addEventListener('click', () => {
      const btn = block.querySelector('.level-header');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      contentEl.classList.toggle('collapsed', isOpen);
    });

    container.appendChild(block);
  });
}

/* ============================================================
   Render Challenges
   ============================================================ */
function renderChallenges() {
  const container = document.getElementById('challenges-container');
  container.innerHTML = '';

  CHALLENGES.forEach(challenge => {
    const done = progress.challenges.has(challenge.id);

    const card = document.createElement('div');
    card.className = 'challenge-card' + (done ? ' done' : '');
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
        <button class="challenge-toggle" data-id="${challenge.id}">
          ${done ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
      </div>
    `;

    card.querySelector('.challenge-toggle').addEventListener('click', () => {
      if (progress.challenges.has(challenge.id)) {
        progress.challenges.delete(challenge.id);
      } else {
        progress.challenges.add(challenge.id);
      }
      saveProgress();
      // Re-render just this card by replacing it in-place
      const updated = renderSingleChallenge(challenge);
      card.replaceWith(updated);
      updateProgressBars();
    });

    container.appendChild(card);
  });
}

function renderSingleChallenge(challenge) {
  const done = progress.challenges.has(challenge.id);

  const card = document.createElement('div');
  card.className = 'challenge-card' + (done ? ' done' : '');
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
      <button class="challenge-toggle" data-id="${challenge.id}">
        ${done ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  `;

  card.querySelector('.challenge-toggle').addEventListener('click', () => {
    if (progress.challenges.has(challenge.id)) {
      progress.challenges.delete(challenge.id);
    } else {
      progress.challenges.add(challenge.id);
    }
    saveProgress();
    const updated = renderSingleChallenge(challenge);
    card.replaceWith(updated);
    updateProgressBars();
  });

  return card;
}

/* ============================================================
   Reset
   ============================================================ */
function initReset() {
  document.getElementById('reset-btn').addEventListener('click', () => {
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    progress = { topics: new Set(), challenges: new Set() };
    saveProgress();
    renderCurriculum();
    renderChallenges();
    updateProgressBars();
  });
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderCurriculum();
  renderChallenges();
  updateProgressBars();
  initReset();
});
