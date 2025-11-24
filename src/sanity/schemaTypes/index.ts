import { type SchemaTypeDefinition } from 'sanity';
import service from './service';
import product from './product';
import team from './team';
import client from './client';
import blog from './blog';

import companyInfo from './companyInfo';
import homePage from './homePage';
import aboutPage from './aboutPage';
import faq from './faq';
import testimonial from './testimonial';

export const schemaTypes: SchemaTypeDefinition[] = [service, product, team, client, blog, companyInfo, homePage, aboutPage, faq, testimonial];
