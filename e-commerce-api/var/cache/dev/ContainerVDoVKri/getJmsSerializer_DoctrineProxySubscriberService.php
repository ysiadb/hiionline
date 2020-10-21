<?php

namespace ContainerVDoVKri;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getJmsSerializer_DoctrineProxySubscriberService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'jms_serializer.doctrine_proxy_subscriber' shared service.
     *
     * @return \JMS\Serializer\EventDispatcher\Subscriber\DoctrineProxySubscriber
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/jms/serializer/src/EventDispatcher/EventSubscriberInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/serializer/src/EventDispatcher/Subscriber/DoctrineProxySubscriber.php';

        return $container->privates['jms_serializer.doctrine_proxy_subscriber'] = new \JMS\Serializer\EventDispatcher\Subscriber\DoctrineProxySubscriber(true, false);
    }
}
