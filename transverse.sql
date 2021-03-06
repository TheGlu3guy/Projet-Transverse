PGDMP     7        	             y            postgres    13.1    13.1 4    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    13442    postgres    DATABASE     d   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'French_France.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3065                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    24663    labels    TABLE     �   CREATE TABLE public.labels (
    description text NOT NULL,
    nom text NOT NULL,
    lien_externe text,
    id_label integer NOT NULL
);
    DROP TABLE public.labels;
       public         heap    postgres    false            �            1259    24669    Labels_idLabel_seq    SEQUENCE     �   CREATE SEQUENCE public."Labels_idLabel_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Labels_idLabel_seq";
       public          postgres    false    201            �           0    0    Labels_idLabel_seq    SEQUENCE OWNED BY     L   ALTER SEQUENCE public."Labels_idLabel_seq" OWNED BY public.labels.id_label;
          public          postgres    false    202            �            1259    24671    annonces    TABLE     B  CREATE TABLE public.annonces (
    id_producteur integer NOT NULL,
    description text,
    titre text NOT NULL,
    prix real NOT NULL,
    id_produit integer NOT NULL,
    quantite real NOT NULL,
    in_kg boolean NOT NULL,
    id_region integer,
    id_departement integer,
    adresse text,
    id_annonce integer
);
    DROP TABLE public.annonces;
       public         heap    postgres    false            �            1259    24752    annonces_id_annonce_seq    SEQUENCE     �   CREATE SEQUENCE public.annonces_id_annonce_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.annonces_id_annonce_seq;
       public          postgres    false            �            1259    24934    avis_producteur    TABLE     �   CREATE TABLE public.avis_producteur (
    id_avis integer NOT NULL,
    id_user integer,
    id_producteur integer NOT NULL,
    titre text,
    contenu text,
    note integer
);
 #   DROP TABLE public.avis_producteur;
       public         heap    postgres    false            �            1259    24937    avis_producteur_id_avis_seq    SEQUENCE     �   CREATE SEQUENCE public.avis_producteur_id_avis_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.avis_producteur_id_avis_seq;
       public          postgres    false    215            �           0    0    avis_producteur_id_avis_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.avis_producteur_id_avis_seq OWNED BY public.avis_producteur.id_avis;
          public          postgres    false    216            �            1259    24915    departements    TABLE     a   CREATE TABLE public.departements (
    nom text NOT NULL,
    id_departement integer NOT NULL
);
     DROP TABLE public.departements;
       public         heap    postgres    false            �            1259    24925    departements_id_departement_seq    SEQUENCE     �   CREATE SEQUENCE public.departements_id_departement_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.departements_id_departement_seq;
       public          postgres    false    213            �           0    0    departements_id_departement_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.departements_id_departement_seq OWNED BY public.departements.id_departement;
          public          postgres    false    214            �            1259    24677 
   producteur    TABLE     �   CREATE TABLE public.producteur (
    id_producteur integer NOT NULL,
    description text,
    email text,
    nom text,
    prenom text,
    password text
);
    DROP TABLE public.producteur;
       public         heap    postgres    false            �            1259    24683    producteur_label    TABLE     l   CREATE TABLE public.producteur_label (
    id_label integer NOT NULL,
    id_producteur integer NOT NULL
);
 $   DROP TABLE public.producteur_label;
       public         heap    postgres    false            �            1259    24686    produits    TABLE     Y   CREATE TABLE public.produits (
    nom text NOT NULL,
    id_produit integer NOT NULL
);
    DROP TABLE public.produits;
       public         heap    postgres    false            �            1259    24692    produits_id_produit_seq    SEQUENCE     �   CREATE SEQUENCE public.produits_id_produit_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.produits_id_produit_seq;
       public          postgres    false    206            �           0    0    produits_id_produit_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.produits_id_produit_seq OWNED BY public.produits.id_produit;
          public          postgres    false    207            �            1259    24741    regions    TABLE     W   CREATE TABLE public.regions (
    nom text NOT NULL,
    id_region integer NOT NULL
);
    DROP TABLE public.regions;
       public         heap    postgres    false            �            1259    24747    regions_id_region_seq    SEQUENCE     �   ALTER TABLE public.regions ALTER COLUMN id_region ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.regions_id_region_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210            �            1259    24694    users    TABLE     �   CREATE TABLE public.users (
    id_user integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    nom text NOT NULL,
    prenom text NOT NULL,
    description text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24700    user_idUser_seq    SEQUENCE     �   CREATE SEQUENCE public."user_idUser_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."user_idUser_seq";
       public          postgres    false    208                        0    0    user_idUser_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."user_idUser_seq" OWNED BY public.users.id_user;
          public          postgres    false    209            [           2604    24939    avis_producteur id_avis    DEFAULT     �   ALTER TABLE ONLY public.avis_producteur ALTER COLUMN id_avis SET DEFAULT nextval('public.avis_producteur_id_avis_seq'::regclass);
 F   ALTER TABLE public.avis_producteur ALTER COLUMN id_avis DROP DEFAULT;
       public          postgres    false    216    215            Z           2604    24927    departements id_departement    DEFAULT     �   ALTER TABLE ONLY public.departements ALTER COLUMN id_departement SET DEFAULT nextval('public.departements_id_departement_seq'::regclass);
 J   ALTER TABLE public.departements ALTER COLUMN id_departement DROP DEFAULT;
       public          postgres    false    214    213            W           2604    24754    labels id_label    DEFAULT     s   ALTER TABLE ONLY public.labels ALTER COLUMN id_label SET DEFAULT nextval('public."Labels_idLabel_seq"'::regclass);
 >   ALTER TABLE public.labels ALTER COLUMN id_label DROP DEFAULT;
       public          postgres    false    202    201            X           2604    24755    produits id_produit    DEFAULT     z   ALTER TABLE ONLY public.produits ALTER COLUMN id_produit SET DEFAULT nextval('public.produits_id_produit_seq'::regclass);
 B   ALTER TABLE public.produits ALTER COLUMN id_produit DROP DEFAULT;
       public          postgres    false    207    206            Y           2604    24756    users id_user    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN id_user SET DEFAULT nextval('public."user_idUser_seq"'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN id_user DROP DEFAULT;
       public          postgres    false    209    208            �          0    24671    annonces 
   TABLE DATA           �   COPY public.annonces (id_producteur, description, titre, prix, id_produit, quantite, in_kg, id_region, id_departement, adresse, id_annonce) FROM stdin;
    public          postgres    false    203   ?7       �          0    24934    avis_producteur 
   TABLE DATA           `   COPY public.avis_producteur (id_avis, id_user, id_producteur, titre, contenu, note) FROM stdin;
    public          postgres    false    215   u7       �          0    24915    departements 
   TABLE DATA           ;   COPY public.departements (nom, id_departement) FROM stdin;
    public          postgres    false    213   �7       �          0    24663    labels 
   TABLE DATA           J   COPY public.labels (description, nom, lien_externe, id_label) FROM stdin;
    public          postgres    false    201   �7       �          0    24677 
   producteur 
   TABLE DATA           ^   COPY public.producteur (id_producteur, description, email, nom, prenom, password) FROM stdin;
    public          postgres    false    204   :       �          0    24683    producteur_label 
   TABLE DATA           C   COPY public.producteur_label (id_label, id_producteur) FROM stdin;
    public          postgres    false    205   �:       �          0    24686    produits 
   TABLE DATA           3   COPY public.produits (nom, id_produit) FROM stdin;
    public          postgres    false    206   �:       �          0    24741    regions 
   TABLE DATA           1   COPY public.regions (nom, id_region) FROM stdin;
    public          postgres    false    210   �:       �          0    24694    users 
   TABLE DATA           S   COPY public.users (id_user, email, password, nom, prenom, description) FROM stdin;
    public          postgres    false    208   �;                  0    0    Labels_idLabel_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Labels_idLabel_seq"', 3, true);
          public          postgres    false    202                       0    0    annonces_id_annonce_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.annonces_id_annonce_seq', 17, true);
          public          postgres    false    212                       0    0    avis_producteur_id_avis_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.avis_producteur_id_avis_seq', 1, false);
          public          postgres    false    216                       0    0    departements_id_departement_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.departements_id_departement_seq', 1, false);
          public          postgres    false    214                       0    0    produits_id_produit_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.produits_id_produit_seq', 4, true);
          public          postgres    false    207                       0    0    regions_id_region_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.regions_id_region_seq', 13, true);
          public          postgres    false    211                       0    0    user_idUser_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."user_idUser_seq"', 15, true);
          public          postgres    false    209            ]           2606    24706    labels Labels_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.labels
    ADD CONSTRAINT "Labels_pkey" PRIMARY KEY (id_label);
 >   ALTER TABLE ONLY public.labels DROP CONSTRAINT "Labels_pkey";
       public            postgres    false    201            _           2606    24708    produits produits_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.produits
    ADD CONSTRAINT produits_pkey PRIMARY KEY (id_produit);
 @   ALTER TABLE ONLY public.produits DROP CONSTRAINT produits_pkey;
       public            postgres    false    206            a           2606    24710    users user_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id_user);
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public            postgres    false    208            �   &   x�3�,I-.���F@J�Ĕ��3���b���� �	�      �      x������ � �      �   '   x��,:�2����b]ǒ�ļ�����bN3�=... �]7      �   D  x��S�n1������m�nn� �t�"��g:I%;c�ݺ:�qk��ORRv's�g�����-���^Ĉ��L�C'�C��<BL!��C/��b��=t���K�x�w�2t�gȡddpr�'�(�z�
�ږ�h�b20:)�}�d6�JO�/�Y�RD���֔L蓍[�����Η&��&�*�D�����g�܈8�\VXR�J�W����E�0@W^D*�*����*��}��d���ls��y>?y�>�}�I�%��Cل͆ZBǦC��q$��\/������j~��.�ʴG4�TN�ɓ�c����R(�5:�}��$��J�J�as���l�Dmq��͡��a<:��^S�m.X�4X5����?���~�	���XO�u�:�4c���?@k���k�6��q<�BWr;q�6FW/$GO{��j�xD/��~��⹻�4k
.�e�z�Q]ZV���"�^텯~[wZ��οuq�&ٕ�D��#}��ګ��*v��:��Tm݀����
f�M�!e�'G\�b�4�ӯ�ak�$�8w��À������J����
nN������t��A��      �   Y   x�3�,I-.��#.CdX���/��U̘�+U��4�X�4O�,5/%��H!%Ud�B�zbJ~Q���剨�L9�R���Qg $b���� xq      �      x������ � �      �   /   x���M,I�4�
H,1������,c���̢��RN�=... %j-      �   �   x��O;��0�gNAGe�������-����JF!���F�Cpzn��� (��|�oƤ#qՒZﺛ��@��'���f�;R�obw�gL�
#̩�Ljc]�����L����@��?�,�<D��_�bP�ӎ`�����b���S��.'sHu����!.�B�VZ�ʞ�=��g��p��H��xC��-JFߜ��y�g�D�{���      �   �   x�]�1S�0��9�fH��ݤ��!���j�u	H@�E�D�뭌�w|Ec�ǧ�Y�I+�`z��G���y�AӘL�K6W�g������}�[z9C��,�R�8�K�a�h�3�F�yw�#W�pR�&xĞ�Ջ�:�/�o���D�DԨ�A�]pw��{��tU��q']gz�2ׯ��1��o`�Y?�Q�����B���>Y�a��MT�     