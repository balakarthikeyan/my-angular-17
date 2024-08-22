import {
    assertInInjectionContext,
    inject,
    HostAttributeToken,
} from '@angular/core';

export function MyHostAttribute<R>(key: string, defaultValue: R): R {
    assertInInjectionContext(MyHostAttribute);
    return (
        (inject(new HostAttributeToken(key), { optional: true }) as R) ??
        defaultValue
    );
}

MyHostAttribute.required = function <R>(key: string): R {
    assertInInjectionContext(MyHostAttribute);
    return inject(new HostAttributeToken(key)) as R;
};