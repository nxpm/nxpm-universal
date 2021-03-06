import { Injectable } from '@angular/core'
import { HotToastService } from '@ngneat/hot-toast'
import { ToastOptions } from '@ngneat/hot-toast/lib/hot-toast.model'
import { Content } from '@ngneat/overview'

@Injectable({ providedIn: 'root' })
export class WebUiToastService {
  constructor(private readonly toast: HotToastService) {}

  error<DataType>(message?: Content, options?: ToastOptions<DataType>) {
    return this.toast.error(message, options)
  }

  success<DataType>(message?: Content, options?: ToastOptions<DataType>) {
    return this.toast.success(message, options)
  }

  warning<DataType>(message?: Content, options?: ToastOptions<DataType>) {
    return this.toast.warning(message, options)
  }
}
