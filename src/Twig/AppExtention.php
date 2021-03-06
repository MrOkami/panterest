<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtention extends AbstractExtension
{

    public function getFunctions(): array
    {
        return [
            new TwigFunction('pluralize', [$this, 'pluralize']),
        ];
    }

    public function pluralize(int $count, string $singular, ?string $plural = null):string
    {
        $plural ??= $singular . 's';

        $str = $count === 1 ? $singular : $plural;
        return "$count $str";
    }
}
