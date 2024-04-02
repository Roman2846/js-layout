import { text } from 'express'
import {
  createElement,
  createHeader,
} from '../../script/com'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', `Ком'юніті`)
page.append(title)

// ===
