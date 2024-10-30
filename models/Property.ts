// import { time } from 'console';
// import { Schema, model, models } from 'mongoose';

// const PropertySchema = new Schema(
//     {
//         Owner:{
//             type: Schema.Types.ObjectId,
//             ref: 'User',
//             required: true
//         },
        
//         name: {
//             type: String,
//             required: true
//         },
//         type: {
//             type: String,
//             required: true
//         },
//         description: {
//             type: String,
//         },
//         laocation: {
//             street: {
//                 type: String,
//                 city: String,
//                 state: String,
//                 zipcode: String,
//             },
//             beds: {
//                 type: Number,
//                 required: true
//             },
//             baths: {
//                 type: Number,
//                 required: true
//             },
//             amenities: [
//                 {
//                     type: String
//                 }
//             ],
//             rates: {
//                 nightly: Number,
//                 weekly: Number,
//                 monthly: Number
//             },
//             seller_info: {
//                 name: String,
//                 phone: String,
//                 email: String
//             },
//             images: [
//                 {
//                     type: String
//                 }
//             ],
//             is_featured: {
//                 type: Boolean,
//                 default: false
//             }
//         }
//     },

//      { timestamps: true })
// const User = models.Property || model('Property', PropertySchema);

// export default PropertySchema;



import { Schema, model, models } from 'mongoose';

// Define the Property schema
const PropertySchema = new Schema(
    {
        Owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        laocation: {
            street: { type: String },
            city: String,
            state: String,
            zipcode: String,
        },
        beds: {
            type: Number,
            required: true,
        },
        baths: {
            type: Number,
            required: true,
        },
        amenities: [
            {
                type: String,
            },
        ],
        rates: {
            nightly: Number,
            weekly: Number,
            monthly: Number,
        },
        seller_info: {
            name: String,
            phone: String,
            email: String,
        },
        images: [
            {
                type: String,
            },
        ],
        is_featured: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

// Define and export the model
const Property = models.Property || model('Property', PropertySchema);

export default Property;