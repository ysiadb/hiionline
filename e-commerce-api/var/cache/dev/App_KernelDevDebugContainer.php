<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerVDoVKri\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerVDoVKri/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerVDoVKri.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerVDoVKri\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerVDoVKri\App_KernelDevDebugContainer([
    'container.build_hash' => 'VDoVKri',
    'container.build_id' => '29eafbc5',
    'container.build_time' => 1596543729,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerVDoVKri');