import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrganizationDocument = HydratedDocument<Organization>;

@Schema({ timestamps: true })
export class Organization {
  @Prop({ required: true, unique: true })
  slug!: string;

  @Prop({ required: true })
  name!: string;

  @Prop()
  description?: string;

  @Prop({
    type: {
      phone: { type: String },
      telegram: { type: String },
      address: { type: String }
    },
    default: {}
  })
  contacts?: {
    phone?: string;
    telegram?: string;
    address?: string;
  };
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
