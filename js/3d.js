let scene, camera, renderer, model, mixer;

function init3D() {
    // Criando a cena
    scene = new THREE.Scene();

    // Criando a câmera
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 10;

    // Criando o renderizador e ajustando para fundo transparente
    renderer = new THREE.WebGLRenderer({ alpha: true }); // `alpha: true` permite transparência
    renderer.setSize(500, 500); // Define o tamanho do renderizador
    renderer.setClearColor(0x000000, 0); // Torna o fundo transparente
    document.getElementById("boneco").appendChild(renderer.domElement);

    // Adicionando luz à cena
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Carregando o modelo 3D
    const loader = new THREE.GLTFLoader();
loader.load('https://raw.githubusercontent.com/edlus2/portifolio/main/models/eu.glb', (gltf) => {
    model = gltf.scene;
    scene.add(model);

    model.scale.set(0.05, 0.05, 0.05);
    model.position.set(0, 0, 0); // Ajuste a posição do modelo

    if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
    }

    animate();
}, undefined, (error) => {
    console.error('Erro ao carregar o modelo 3D:', error);
});
}       

// Função para animação contínua
function animate() {
    requestAnimationFrame(animate);

    // Atualiza o AnimationMixer (se existir)
    if (mixer) {
        mixer.update(0.03); // Atualiza as animações (o valor é o deltaTime)
    }

    renderer.render(scene, camera);
}

// Inicializa o 3D quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', (event) => {
    init3D();
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
        });
    });
});

