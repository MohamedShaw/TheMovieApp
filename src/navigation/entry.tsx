import * as React from 'react';
import {Provider} from 'react-redux';
import {QueryClientProvider} from 'react-query';

import {Stack} from './stack';
import {queryClient} from '@src/utils/const';
import {store} from '@src/store';

export function Entry() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Stack />
      </QueryClientProvider>
    </Provider>
  );
}
